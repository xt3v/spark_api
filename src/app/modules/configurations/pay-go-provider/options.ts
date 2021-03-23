import { parses, renders, endpointV1 } from "../../../services/constants/form-options-configs";

const PayGoProviderFields: any = {
    "name": "List Create Pay Go Providers Api",
    "description": "",
    renders,
    parses,
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name"
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Description"
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            }

        }
    }
}
export {
    PayGoProviderFields
}