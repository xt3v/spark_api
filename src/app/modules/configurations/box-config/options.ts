
const BoxConfigfields: any = {
    "name": "List Create Box Configs Api",
    "description": "",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "items_details": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Items details",
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
                            "label": "Has serial"
                        },
                        "type": {
                            "type": "field",
                            "required": true,
                            "read_only": false,
                            "label": "Type"
                        }
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
            "items": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Items",
                "display_name": "name",
                "multiple": true,
                "url": "https://api.spark.sisitech.dev/api/v1/item-configs/"
            }
        }
    }
}

export {
    BoxConfigfields
}