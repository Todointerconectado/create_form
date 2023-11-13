export const controlForm = () => {
    const form = document.querySelector("#form");
    form.addEventListener("submit", e => {
        e.preventDefault();

        // Crear una instancia de FormData utilizando el form que desencadenó el evento de envío (submit).
        const instanciaForm = new FormData(e.target);

        // Desestructura los datos de la instancia de FormData en variables individuales.
        const datos = Object.fromEntries(instanciaForm);

        const ul = document.createElement("ul");
        ul.classList.add("ul");

        for (let [clave, valor] of Object.entries(datos)) {
            const li = document.createElement("li");
            li.classList.add("li");

            li.textContent = `${clave.toUpperCase()}: ${valor.toLowerCase()}`;
            ul.append(li);
        }

        // Alert
        Swal.fire({
            title: 'Solicitud enviada',
            icon: 'success',
            html: ul.outerHTML,
            showCloseButton: true,
        })
        .then(result => {
            result.isConfirmed 
                ? form.reset()
                : form.reset();
        });
    });
}