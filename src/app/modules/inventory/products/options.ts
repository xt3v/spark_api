import { parses, renders, endpointV1 } from '../../../services/constants/form-options-configs'

export const optionsField: any =
{
    "name": "List Create Products Api",
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
            "boxes_config_details": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Boxes config details",
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
                                    "item_name": {
                                        "type": "string",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Item name"
                                    },
                                    "type": {
                                        "type": "string",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Type"
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
                                    "count": {
                                        "type": "integer",
                                        "required": false,
                                        "read_only": false,
                                        "label": "Count"
                                    },
                                    "box_config": {
                                        "type": "field",
                                        "required": false,
                                        "read_only": false,
                                        "label": "Box config"
                                    },
                                    "item_config": {
                                        "type": "field",
                                        "required": true,
                                        "read_only": false,
                                        "label": "Item config"
                                    }
                                }
                            }
                        },
                        "items": {
                            "type": "field",
                            "required": true,
                            "read_only": false,
                            "label": "Items",
                            "child": {
                                "type": "nested object",
                                "required": true,
                                "read_only": false,
                                "children": {
                                    "id": {
                                        "type": "integer",
                                        "required": false,
                                        "read_only": true,
                                        "label": "ID"
                                    },
                                    "item_name": {
                                        "type": "string",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Item name"
                                    },
                                    "type": {
                                        "type": "string",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Type"
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
                                    "count": {
                                        "type": "integer",
                                        "required": false,
                                        "read_only": false,
                                        "label": "Count"
                                    },
                                    "box_config": {
                                        "type": "field",
                                        "required": false,
                                        "read_only": false,
                                        "label": "Box config"
                                    },
                                    "item_config": {
                                        "type": "field",
                                        "required": true,
                                        "read_only": false,
                                        "label": "Item config"
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
            "customer": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Customer",
                "display_name": "name",
                "url": `${endpointV1}customers/`

            //     "type": "multifield",
            //     "required": true,
            //     "read_only": false,
            //     "label": "Customer",
            //     "display_name": "name",
            //     "value_field": "id",
            //    // "edit_source_field": "items_details",
            //     "multiple": true,
            //     "url": `customers/`,
            //     "search_field": "name",
            //     "edit_display_name": "name",
                // "res_value_field": "item_config"
            },
            "product_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Product config",
                "display_name": "name",
                "url": `${endpointV1}product-configs/`
            },
            "items": {
                "type": "field",
                "multiple": true,
                "required": false,
                "read_only": false,
                "label": "Items",
                "display_name": "item_config_name",
                "url": `${endpointV1}itemz/`
            },
            "boxes": {
                "type": "field",
                "multiple": true,
                "required": false,
                "read_only": false,
                "label": "Boxes",
                "display_name": "box_config",
                "url": `${endpointV1}boxs/`
            }
        }
    }
}