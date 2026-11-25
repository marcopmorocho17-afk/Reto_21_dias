import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
import { useColorScheme } from "react-native";
import {
  alternarHabito as cambiarEstadoHabito,
  calcularProgreso,
  crearProgresoInicial,
  type IdHabito,
  type ProgresoDiario,
} from "../../backend/habitos";

type ModoTema = "light" | "dark";
interface ValorContextoHabitos {
  modoOscuro: boolean;
  alternarTema: () => void;
  progresoDiario: ProgresoDiario;
  alternarHabito: (id: IdHabito) => void;
  reiniciarProgreso: () => void;
  habitosCompletados: number;
  porcentajeCompletado: number;
  diaActual: number;
  cambiarDia: (dia: number) => void;
}

const ContextoHabitos = createContext<ValorContextoHabitos | null>(null);

export function AppProvider({ children }: PropsWithChildren) {
  const temaDelSistema = useColorScheme();
  const [modoTema, cambiarModoTema] = useState<ModoTema>("light");
  const [progresoDiario, actualizarProgreso] = useState<ProgresoDiario>(crearProgresoInicial);
  const [diaActual, cambiarDiaActual] = useState(1);

  useEffect(() => {
    cambiarModoTema(temaDelSistema === "dark" ? "dark" : "light");
  }, [temaDelSistema]);

  const alternarHabito = (id: IdHabito) => actualizarProgreso((actual) => cambiarEstadoHabito(actual, id));
  const reiniciarProgreso = () => actualizarProgreso(crearProgresoInicial());
  const progreso = calcularProgreso(progresoDiario);

  const valor: ValorContextoHabitos = {
    modoOscuro: modoTema === "dark",
    alternarTema: () => cambiarModoTema((actual) => actual === "dark" ? "light" : "dark"),
    progresoDiario,
    alternarHabito,
    reiniciarProgreso,
    habitosCompletados: progreso.completados,
    porcentajeCompletado: progreso.porcentaje,
    diaActual,
    cambiarDia: cambiarDiaActual,
  };

  return <ContextoHabitos.Provider value={valor}>{children}</ContextoHabitos.Provider>;
}

export function useHabitos(): ValorContextoHabitos {
  const contexto = useContext(ContextoHabitos);
  if (!contexto) throw new Error("useHabitos debe usarse dentro de AppProvider");
  return contexto;
}
