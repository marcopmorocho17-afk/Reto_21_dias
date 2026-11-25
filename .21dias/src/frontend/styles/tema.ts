import { StyleSheet } from "react-native";

export const paleta = {
  blanco: "#ffffff",
  fondoClaro: "#F8FAFC",
  fondoOscuro: "#0A0A0A",
  superficieOscura: "#171717",
  bordeOscuro: "#2A2A2A",
  textoClaro: "#E5E5E5",
  textoTenue: "#A3A3A3",
  violeta: "#7c3aed",
  violetaClaro: "#A78BFA",
  violetaTexto: "#C4B5FD",
  indigo: "#6366F1",
  indigoOscuro: "#312E81",
  bordeClaro: "#E2E8F0",
};

export function coloresTema(modoOscuro: boolean) {
  return {
    blanco: paleta.blanco,
    fondo: modoOscuro ? paleta.fondoOscuro : paleta.fondoClaro,
    superficie: modoOscuro ? paleta.superficieOscura : paleta.blanco,
    borde: modoOscuro ? paleta.bordeOscuro : paleta.bordeClaro,
    textoPrincipal: modoOscuro ? paleta.blanco : "#0F172A",
    textoSecundario: modoOscuro ? paleta.textoClaro : "#334155",
    textoTenue: modoOscuro ? paleta.textoTenue : "#64748B",
  };
}

export const opcionesNavegacion = {
  violetaActiva: paleta.violeta,
  anchoDrawer: 280,
  alturaTabs: 68,
};

export const estilosTarjetaHabito = StyleSheet.create({
  tarjeta: { flexDirection: "row", alignItems: "center", borderRadius: 18, padding: 16, marginBottom: 12 },
  iconoContenedor: { width: 48, height: 48, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  contenido: { flex: 1, marginHorizontal: 12 },
  indicador: { width: 30, height: 30, borderRadius: 15, borderWidth: 2, alignItems: "center", justifyContent: "center" },
});

export const estilosElementoMenu = StyleSheet.create({
  contenedor: { flexDirection: "row", alignItems: "center", paddingVertical: 15, borderBottomWidth: 1 },
  iconoContenedor: { width: 38, height: 38, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  etiqueta: { flex: 1, marginHorizontal: 12 },
  etiquetaDerecha: { marginRight: 8 },
});

export const estilosTarjetaProgreso = StyleSheet.create({
  contenedor: { borderRadius: 22, padding: 20 },
  encabezado: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  barra: { height: 10, borderRadius: 5, marginTop: 16, overflow: "hidden" },
  relleno: { height: "100%", borderRadius: 5 },
});

export const estilosPantallas = StyleSheet.create({
  raiz: { flex: 1 },
  scroll: { padding: 20 },
  scrollConFondo: { padding: 20, paddingBottom: 36 },
  tituloEspaciado: { marginBottom: 20 },
  consejo: { marginTop: 8, padding: 16, borderRadius: 16, backgroundColor: "#ECFDF5" },
  tituloConsejo: { color: "#166534" },
  textoConsejo: { color: "#15803D" },
  encabezadoHoy: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  selectorDia: { flexDirection: "row", alignItems: "center", borderRadius: 14, padding: 6 },
  textoDia: { marginHorizontal: 8 },
  tituloHabitos: { marginTop: 24, marginBottom: 12 },
  calendario: { marginTop: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  diaCalendario: { width: "13%", aspectRatio: 1, borderRadius: 12, marginBottom: 10, alignItems: "center", justifyContent: "center" },
  resumen: { marginTop: 12, borderRadius: 18, padding: 18, borderWidth: 1 },
  textoResumen: { marginTop: 6 },
  perfilCentro: { alignItems: "center", marginVertical: 18 },
  avatar: { width: 88, height: 88, borderRadius: 44, alignItems: "center", justifyContent: "center" },
  nombrePerfil: { marginTop: 10 },
  panelPerfil: { borderRadius: 18, paddingHorizontal: 16 },
  interruptor: { position: "absolute", right: 44, top: 17 },
});
