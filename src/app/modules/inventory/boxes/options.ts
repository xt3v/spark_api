import { parses, renders, endpointV1 } from "../../../services/constants/form-options-configs";
const BoxConfigFields: any = {
    "name": "Bulk Create Boxs Api",
    "description": "",
    renders,
    parses,
    "actions": {
        "POST": {
            "box_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Box Configuration",
                "display_name": "name",
                "url": `${endpointV1}box-configs/`
            },
          
            "store": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Store",
                "display_name": "name",
                "url": `${endpointV1}stores/`
            },
            "purchase_order": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Purchase order",
                "max_length": 45
            },
            "serial_numbers": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Serial numbers",
                "max_length": 1000
            },
           
        }
    }
}

export {
    BoxConfigFields
}