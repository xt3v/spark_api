import { parses, renders } from "../../../../services/constants/form-options-configs";

const SerializedItemfields: any = {
    "name": "List Create Items Api",
    "description": "",
    parses,
    renders,
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
            "purchase_order": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Purchase order",
                "max_length": 45
            },
            "serial": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Serial",
                "max_length": 400
            },
            "store": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Warehouse / Stockroom",
                "display_name": "name",
                "url": `stores`
            },
            "item_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Item Name",
                "display_name": "name",
                "url": `item-configs`
            },
            "box": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Box",
                "display_name": "name",
                "url": `box-configs`
            }
        }
    }
}

const NotSerializedItemfields: any = {
    "name": "List Create Items Api",
    "description": "",
    parses,
    renders,
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
            "purchase_order": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Purchase order",
                "max_length": 45
            },
            "serial": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Serial",
                "max_length": 400
            },
            "store": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Warehouse / Stockroom",
                "display_name": "name",
                "url": `stores`
            },
            "item_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Item Name",
                "display_name": "name",
                "url": `item-configs`
            },
            "box": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Box",
                "display_name": "name",
                "url": `box-configs`
            }
        }
    }
}

export {
    SerializedItemfields, NotSerializedItemfields
}