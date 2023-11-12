import { TipoSeguro } from "./tipoSeguros.mjs";

export const llenarSelectConClaves = (selectElement, objeto) => {
    // Recorre las claves del objeto ValoresSeguros
    for (const clave in objeto) {
        // Crea un elemento <option> para cada clave
        const optionElement = document.createElement("option");
        
        // Asigna el valor de la clave como el texto del <option>
        optionElement.text = clave;
        
        // Agrega el <option> al elemento <select>
        TipoSeguro.select.add(optionElement);
    }
}