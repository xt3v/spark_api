import { parses, renders } from "../../../services/constants/form-options-configs";

const ItemConfigfields: any = {
    "name": "List Create Item Configs Api",
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
            "type_name": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Type name"
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
                "max_length": 50
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Description",
                "max_length": 400
            },
            "has_serial": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Has serial No.?"
            },
            "type": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Item Type",
                "display_name": "name",
                "url": `item-type-configs/`
            }
        }
    }
}

export {
    ItemConfigfields
}