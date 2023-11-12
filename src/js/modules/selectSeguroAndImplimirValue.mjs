import { TipoSeguro } from "./tipoSeguros.mjs";

export const selectSeguroAndImplimirValue = () => {
    TipoSeguro.select.addEventListener("change", () => {
        const valorSelect = TipoSeguro.select.value;

        // Imprimir el valor seleccionado en el elemento correspondiente.
        TipoSeguro.imprimerValorSeguro.textContent = `
            ${TipoSeguro.ValoresSeguros[valorSelect]} 
            ${TipoSeguro.Divisas}
        `;
    });
}