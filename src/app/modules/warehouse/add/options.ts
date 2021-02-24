
import { parses, renders, endpointV1 } from "../../../services/constants/form-options-configs";

const warehouseFields: any = {
    "name": "List Create Stores Api",
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
            },
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name",
                "max_length": 45
            },
            "type": {
                "type": "choice",
                "required": true,
                "read_only": false,
                "label": "Type",
                "choices": [
                    {
                        "value": "WH",
                        "display_name": "Warehouse"
                    },
                    {
                        "value": "SR",
                        "display_name": "Stock Room"
                    }
                ]
            },
            "location": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Location / Region",
                "display_name": "name",
                "url": `${endpointV1}locations/`
            },
            "manager": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Manager",
                "display_name": "full_name",
                "url": `${endpointV1}users/`
            }
        }
    }
}

export {
    warehouseFields
}