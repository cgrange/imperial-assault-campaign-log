export const campaignLogSchema = {
    bsonType: "object",
    required: ["missionLog", "imperialTracker", "rebelTracker"],
    properties: {
        missionLog: {
            bsonType: "object",
            required: ["campaignName", "missions", "finale"],
            properties: {
                campaignName: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                missions: {
                    bsonType: "array",
                    minItems: 1,
                    items: {
                        bsonType: "object",
                        required: ["type", "threatLevel", "itemTiers"],
                        properties: {
                            type: {
                                enum: ["Introduction", "Story Mission", "Side Mission", "Interlude"],
                                description: "can only be one of the enum values and is required"
                            },
                            name: {
                                bsonType: "string",
                                description: "must be a string if the field exists"
                            },
                            threatLevel: {
                                bsonType: "int",
                                minimum: 1,
                                description: "must be an integer >= 1 and is required"
                            },
                            accomplished: {
                                bsonType: "boolean",
                                description: "must be a boolean if the field exists"
                            },
                            itemTiers: {
                                bsonType: 'array',
                                minItems: 1,
                                items: {
                                    bsonType: "int",
                                    minimum: 1,
                                    maximum: 3
                                }
                            },
                            rebelUpgradeComplete: {
                                bsonType: "boolean",
                                description: "must be a boolean if the field exists"
                            },
                            imperialUpgradeComplete: {
                                bsonType: "boolean",
                                description: "must be a boolean if the field exists"
                            }
                        }
                    }
                },
                finale: {
                    bsonType: "object",
                    required: ["threatLevel"],
                    properties: {
                        name: {
                            bsonType: "string",
                            description: "must be a string if the field exists"
                        },
                        threatLevel: {
                            bsonType: "int",
                            minimum: 1,
                            description: "must be an integer and is required"
                        },
                        accomplished: {
                            bsonType: "boolean",
                            description: "must be a boolean if the field exists"
                        }
                    }
                },
                forcedMissions: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["name", "threatLevel"],
                        properties: {
                            name: {
                                bsonType: "string",
                                description: "must be a string and is required"
                            },
                            threatLevel: {
                                bsonType: "int",
                                minimum: 1,
                                description: "must be an integer >= 1 and is required",
                            },
                            accomplished: {
                                bsonType: "boolean",
                                description: "must be a boolean if the field exists"
                            }
                        }
                    }
                }
            }
        },
        imperialTracker: {
            bsonType: "object",
            properties: {
                xp: {
                    bsonType: "int",
                    minimum: 0,
                    description: "must be an integer >= 0 if the field exists"
                },
                class: {
                    bsonType: "string",
                    description: "the imperial player's class e.g. military might, subversive tactics, etc."
                },
                abilities: {
                    bsonType: "array",
                    items: {
                        bsonType: "string",
                        description: "must be a string if the field exists"
                    }
                },
                influence: {
                    bsonType: "int",
                    minimum: 0,
                    description: "must be an integer >= 0 if the field exists"
                },
                ongoingAgendas: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["name", "target"],
                        properties: {
                            name: {
                                bsonType: "string",
                                description: "must be a string and is required"
                            },
                            target: {
                                bsonType: "string",
                                description: "must be a string and is required"
                            }
                        }
                    }
                }
            }
        },
        rebelTracker: {
            bsonType: "object",
            required: ["characters"],
            properties: {
                credits: {
                    bsonType: "int",
                    minimum: 0,
                    description: "must be an integer >= 0 if the field exists"
                },
                characters: {
                    bsonType: "array",
                    minItems: 2,
                    items: {
                        bsonType: "object",
                        required: ["name"],
                        properties: {
                            name: {
                                bsonType: "string",
                                description: "must be a string and is required"
                            },
                            xp: {
                                bsonType: "int",
                                minimum: 0,
                                description: "must be an int >= 0 if the field exists"
                            },
                            abilities: {
                                bsonType: "array",
                                items: {
                                    bsonType: "string",
                                    description: "must be a string if the field exists"
                                }
                            }
                        }
                    }
                },
                equipment: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["name", "itemTier"],
                        properties: {
                            name: {
                                bsonType: "string",
                                description: "the name of the equipment (required)"
                            },
                            itemTier: {
                                bsonType: "int",
                                minimum: 1,
                                maximum: 3,
                                description: "the item tier of the equipment in [1, 3] (required)"
                            }
                        }
                    }
                },
                rewards: {
                    bsonType: "array",
                    items: {
                        bsonType: "string",
                        description: "the name of the reward"
                    }
                }
            }
        }
    }
}