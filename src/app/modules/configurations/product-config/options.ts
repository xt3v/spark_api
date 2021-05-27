import { parses, renders} from "../../../services/constants/form-options-configs";

const ProductFields: any = {
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
                "label": "Description",
                "max_length": 400
            },
            "kit_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Kit Configuration",
                "url": `kit-configs/`,
                "display_name": "name"
            },
            "price_group_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Price Group Config",
                "url": `price-group-configs/`,
                "display_name": "name"
            },
            "kit_configuration_details": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Kit Configuration Details",
                "child": {
                    "type": "nested object",
                    "required": false,
                    "read_only": true,
                    "children": {
                        "id": {
                            "type": "integer",
                            "required": false,
                            "read_only": true,
                            "label": "ID"
                        },
                    }
                }
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
    ProductFields
}