import { TipoSeguro } from "./modules/tipoSeguros.mjs";
import { llenarSelectConClaves } from "./modules/llenarSelectConClaves.mjs";
import { selectSeguroAndImplimirValue } from "./modules/selectSeguroAndImplimirValue.mjs";
import { controlForm} from "./modules/controlForm.mjs"

// Utiliza la función para llenar el <select> con las claves del objeto
llenarSelectConClaves(TipoSeguro.select, TipoSeguro.ValoresSeguros);

// Agrega un evento al cambio en el select
selectSeguroAndImplimirValue();

controlForm();