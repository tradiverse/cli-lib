/* THIS FILE IS AUTO GENERATED BY PARSE-API.JS */ 

export const CLI_DATA={"apiBaseUrl":"https://api.spacetraders.io/v2","commands":{"":{"description":"Return the status of the game server.\nThis also includes a few global elements, such as announcements, server reset dates and leaderboards.","commands":{},"usage":"","operationId":"get-status","props":[],"jsonData":[],"apiPath":"/","apiAction":"get","apiAuth":true,"params":[]},"REGISTER":{"description":"Creates a new agent and ties it to an account. \nThe agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.\n\nThis new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.\n\n> #### Keep your token safe and secure\n>\n> Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.\n\nIf you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.","commands":{},"usage":"register {faction} {symbol} {email}","operationId":"register","props":[{"name":"faction","options":["COSMIC","VOID","GALACTIC","QUANTUM","DOMINION","ASTRO","CORSAIRS","OBSIDIAN","AEGIS","UNITED","SOLITARY","COBALT","OMEGA","ECHO","LORDS","CULT","ANCIENTS","SHADOW","ETHEREAL"]},{"name":"symbol","description":"Your desired agent symbol. This will be a unique name used to represent your agent, and will be the prefix for your ships."},{"name":"email","description":"Your email address. This is used if you reserved your call sign between resets."}],"jsonData":[],"apiPath":"/register","apiAction":"post","apiAuth":true,"params":[]},"SYSTEMS":{"description":"Return a paginated list of all systems.","commands":{"_":{"description":"Get the details of a system.","commands":{"WAYPOINTS":{"description":"Return a paginated list of all of the waypoints for a given system.\n\nIf a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.","commands":{"_":{"description":"View the details of a waypoint.\n\nIf the waypoint is uncharted, it will return the 'Uncharted' trait instead of its actual traits.","commands":{"MARKET":{"description":"Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.\n\nSend a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.","commands":{},"usage":"systems {system symbol} waypoints {waypoint symbol} market","operationId":"get-market","props":[],"jsonData":[],"apiPath":"/systems/{systemSymbol}/waypoints/{waypointSymbol}/market","apiAction":"get","apiAuth":true,"params":[{"name":"systemSymbol","description":"The system symbol"},{"name":"waypointSymbol","description":"The waypoint symbol"}]},"SHIPYARD":{"description":"Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.","commands":{},"usage":"systems {system symbol} waypoints {waypoint symbol} shipyard","operationId":"get-shipyard","props":[],"jsonData":[],"apiPath":"/systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard","apiAction":"get","apiAuth":true,"params":[{"name":"systemSymbol","description":"The system symbol"},{"name":"waypointSymbol","description":"The waypoint symbol"}]},"JUMP-GATE":{"description":"Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.\n\nThe response will return all systems that are have a Jump Gate in range of this Jump Gate. Those systems can be jumped to from this Jump Gate.","commands":{},"usage":"systems {system symbol} waypoints {waypoint symbol} jump-gate","operationId":"get-jump-gate","props":[],"jsonData":[],"apiPath":"/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate","apiAction":"get","apiAuth":true,"params":[{"name":"systemSymbol","description":"The system symbol"},{"name":"waypointSymbol","description":"The waypoint symbol"}]}},"param":"{waypointSymbol}","usage":"systems {system symbol} waypoints {waypoint symbol}","operationId":"get-waypoint","props":[],"jsonData":[],"apiPath":"/systems/{systemSymbol}/waypoints/{waypointSymbol}","apiAction":"get","apiAuth":true,"params":[{"name":"systemSymbol","description":"The system symbol"},{"name":"waypointSymbol","description":"The waypoint symbol"}]}},"usage":"systems {system symbol} waypoints","operationId":"get-system-waypoints","props":[],"jsonData":[],"apiPath":"/systems/{systemSymbol}/waypoints","apiAction":"get","apiAuth":true,"params":[{"name":"systemSymbol","description":"The system symbol"}]}},"param":"{systemSymbol}","usage":"systems {system symbol}","operationId":"get-system","props":[],"jsonData":[],"apiPath":"/systems/{systemSymbol}","apiAction":"get","apiAuth":true,"params":[{"name":"systemSymbol","description":"The system symbol"}]}},"usage":"systems","operationId":"get-systems","props":[],"jsonData":[],"apiPath":"/systems","apiAction":"get","apiAuth":true,"params":[]},"FACTIONS":{"description":"Return a paginated list of all the factions in the game.","commands":{"_":{"description":"View the details of a faction.","commands":{},"param":"{factionSymbol}","usage":"factions {faction symbol}","operationId":"get-faction","props":[],"jsonData":[],"apiPath":"/factions/{factionSymbol}","apiAction":"get","apiAuth":false,"params":[{"name":"factionSymbol","description":"The faction symbol"}]}},"usage":"factions","operationId":"get-factions","props":[],"jsonData":[],"apiPath":"/factions","apiAction":"get","apiAuth":true,"params":[]},"AGENT":{"description":"Fetch your agent's details.","commands":{},"usage":"agent","operationId":"get-my-agent","props":[],"jsonData":[],"apiPath":"/my/agent","apiAction":"get","apiAuth":true,"params":[]},"CONTRACTS":{"description":"Return a paginated list of all your contracts.","commands":{"_":{"description":"Get the details of a contract by ID.","commands":{"ACCEPT":{"description":"Accept a contract by ID. \n\nYou can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.","commands":{},"usage":"contracts {contract id} accept","operationId":"accept-contract","props":[],"jsonData":[],"apiPath":"/my/contracts/{contractId}/accept","apiAction":"post","apiAuth":true,"params":[{"name":"contractId","description":"The contract ID to accept."}]},"DELIVER":{"description":"Deliver cargo to a contract.\n\nIn order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.\n\nCargo that was delivered will be removed from the ship's cargo.","commands":{},"usage":"contracts {contract id} deliver {ship symbol} {trade symbol} {units}","operationId":"deliver-contract","props":[{"name":"shipSymbol","description":"Symbol of a ship located in the destination to deliver a contract and that has a good to deliver in its cargo."},{"name":"tradeSymbol","description":"The symbol of the good to deliver."},{"name":"units","description":"Amount of units to deliver."}],"jsonData":[],"apiPath":"/my/contracts/{contractId}/deliver","apiAction":"post","apiAuth":true,"params":[{"name":"contractId","description":"The ID of the contract."}]},"FULFILL":{"description":"Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.","commands":{},"usage":"contracts {contract id} fulfill","operationId":"fulfill-contract","props":[],"jsonData":[],"apiPath":"/my/contracts/{contractId}/fulfill","apiAction":"post","apiAuth":true,"params":[{"name":"contractId","description":"The ID of the contract to fulfill."}]}},"param":"{contractId}","usage":"contracts {contract id}","operationId":"get-contract","props":[],"jsonData":[],"apiPath":"/my/contracts/{contractId}","apiAction":"get","apiAuth":true,"params":[{"name":"contractId","description":"The contract ID"}]}},"usage":"contracts","operationId":"get-contracts","props":[],"jsonData":[],"apiPath":"/my/contracts","apiAction":"get","apiAuth":true,"params":[]},"SHIPS":{"description":"","commands":{"LIST":{"description":"Return a paginated list of all of ships under your agent's ownership.","commands":{},"usage":"ships list","operationId":"get-my-ships","props":[],"jsonData":[],"apiPath":"/my/ships","apiAction":"get","apiAuth":true,"params":[]},"PURCHASE":{"description":"Purchase a ship from a Shipyard. In order to use this function, a ship under your agent's ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.\n\nShipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.","commands":{},"usage":"ships purchase {ship type} {waypoint symbol}","operationId":"purchase-ship","props":[{"name":"shipType","options":["SHIP_PROBE","SHIP_MINING_DRONE","SHIP_INTERCEPTOR","SHIP_LIGHT_HAULER","SHIP_COMMAND_FRIGATE","SHIP_EXPLORER","SHIP_HEAVY_FREIGHTER","SHIP_LIGHT_SHUTTLE","SHIP_ORE_HOUND","SHIP_REFINING_FREIGHTER"]},{"name":"waypointSymbol","description":"The symbol of the waypoint you want to purchase the ship at."}],"jsonData":[],"apiPath":"/my/ships","apiAction":"post","apiAuth":true,"params":[]},"_":{"description":"Retrieve the details of a ship under your agent's ownership.","commands":{"CARGO":{"description":"Retrieve the cargo of a ship under your agent's ownership.","commands":{},"usage":"ships {ship symbol} cargo","operationId":"get-my-ship-cargo","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/cargo","apiAction":"get","apiAuth":true,"params":[{"name":"shipSymbol","description":"The symbol of the ship."}]},"ORBIT":{"description":"Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.\n\nOrbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.\n\nThe endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.","commands":{},"usage":"ships {ship symbol} orbit","operationId":"orbit-ship","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/orbit","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The symbol of the ship."}]},"REFINE":{"description":"Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.\n\nWhen refining, 30 basic goods will be converted into 10 processed goods.","commands":{},"usage":"ships {ship symbol} refine {produce}","operationId":"ship-refine","props":[{"name":"produce","description":"The type of good to produce out of the refining process.","options":["IRON","COPPER","SILVER","GOLD","ALUMINUM","PLATINUM","URANITE","MERITIUM","FUEL"]}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/refine","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The symbol of the ship."}]},"CHART":{"description":"Command a ship to chart the waypoint at its current location.\n\nMost waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.\n\nCharting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint's traits.","commands":{},"usage":"ships {ship symbol} chart","operationId":"create-chart","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/chart","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The symbol of the ship."}]},"COOLDOWN":{"description":"Retrieve the details of your ship's reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.\n\nYour ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.\n\nResponse returns a 204 status code (no-content) when the ship has no cooldown.","commands":{},"usage":"ships {ship symbol} cooldown","operationId":"get-ship-cooldown","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/cooldown","apiAction":"get","apiAuth":true,"params":[{"name":"shipSymbol","description":"The symbol of the ship."}]},"DOCK":{"description":"Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.\n\nDocked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.\n\nThe endpoint is idempotent - successive calls will succeed even if the ship is already docked.","commands":{},"usage":"ships {ship symbol} dock","operationId":"dock-ship","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/dock","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The symbol of the ship."}]},"SURVEY":{"description":"Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.\n\nIn order to use a survey, send the entire survey details in the body of the extract request.\n\nEach survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.\n\nYour ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey's size. Multiple ships can use the same survey for extraction.\n\nA ship must have the `Surveyor` mount installed in order to use this function.","commands":{},"usage":"ships {ship symbol} survey","operationId":"create-survey","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/survey","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The symbol of the ship."}]},"EXTRACT":{"description":"Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.\n\nThe ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.","commands":{},"usage":"ships {ship symbol} extract","operationId":"extract-resources","props":[],"jsonData":["survey"],"apiPath":"/my/ships/{shipSymbol}/extract","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]},"JETTISON":{"description":"Jettison cargo from your ship's cargo hold.","commands":{},"usage":"ships {ship symbol} jettison {symbol} {units}","operationId":"jettison","props":[{"name":"symbol","options":["PRECIOUS_STONES","QUARTZ_SAND","SILICON_CRYSTALS","AMMONIA_ICE","LIQUID_HYDROGEN","LIQUID_NITROGEN","ICE_WATER","EXOTIC_MATTER","ADVANCED_CIRCUITRY","GRAVITON_EMITTERS","IRON","IRON_ORE","COPPER","COPPER_ORE","ALUMINUM","ALUMINUM_ORE","SILVER","SILVER_ORE","GOLD","GOLD_ORE","PLATINUM","PLATINUM_ORE","DIAMONDS","URANITE","URANITE_ORE","MERITIUM","MERITIUM_ORE","HYDROCARBON","ANTIMATTER","FERTILIZERS","FABRICS","FOOD","JEWELRY","MACHINERY","FIREARMS","ASSAULT_RIFLES","MILITARY_EQUIPMENT","EXPLOSIVES","LAB_INSTRUMENTS","AMMUNITION","ELECTRONICS","SHIP_PLATING","EQUIPMENT","FUEL","MEDICINE","DRUGS","CLOTHING","MICROPROCESSORS","PLASTICS","POLYNUCLEOTIDES","BIOCOMPOSITES","NANOBOTS","AI_MAINFRAMES","QUANTUM_DRIVES","ROBOTIC_DRONES","CYBER_IMPLANTS","GENE_THERAPEUTICS","NEURAL_CHIPS","MOOD_REGULATORS","VIRAL_AGENTS","MICRO_FUSION_GENERATORS","SUPERGRAINS","LASER_RIFLES","HOLOGRAPHICS","SHIP_SALVAGE","RELIC_TECH","NOVEL_LIFEFORMS","BOTANICAL_SPECIMENS","CULTURAL_ARTIFACTS","REACTOR_SOLAR_I","REACTOR_FUSION_I","REACTOR_FISSION_I","REACTOR_CHEMICAL_I","REACTOR_ANTIMATTER_I","ENGINE_IMPULSE_DRIVE_I","ENGINE_ION_DRIVE_I","ENGINE_ION_DRIVE_II","ENGINE_HYPER_DRIVE_I","MODULE_MINERAL_PROCESSOR_I","MODULE_CARGO_HOLD_I","MODULE_CREW_QUARTERS_I","MODULE_ENVOY_QUARTERS_I","MODULE_PASSENGER_CABIN_I","MODULE_MICRO_REFINERY_I","MODULE_ORE_REFINERY_I","MODULE_FUEL_REFINERY_I","MODULE_SCIENCE_LAB_I","MODULE_JUMP_DRIVE_I","MODULE_JUMP_DRIVE_II","MODULE_JUMP_DRIVE_III","MODULE_WARP_DRIVE_I","MODULE_WARP_DRIVE_II","MODULE_WARP_DRIVE_III","MODULE_SHIELD_GENERATOR_I","MODULE_SHIELD_GENERATOR_II","MOUNT_GAS_SIPHON_I","MOUNT_GAS_SIPHON_II","MOUNT_GAS_SIPHON_III","MOUNT_SURVEYOR_I","MOUNT_SURVEYOR_II","MOUNT_SURVEYOR_III","MOUNT_SENSOR_ARRAY_I","MOUNT_SENSOR_ARRAY_II","MOUNT_SENSOR_ARRAY_III","MOUNT_MINING_LASER_I","MOUNT_MINING_LASER_II","MOUNT_MINING_LASER_III","MOUNT_LASER_CANNON_I","MOUNT_MISSILE_LAUNCHER_I","MOUNT_TURRET_I"]},{"name":"units","description":"Amount of units to jettison of this good."}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/jettison","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]},"JUMP":{"description":"Jump your ship instantly to a target system. The ship must be in orbit to use this function. When used while in orbit of a Jump Gate waypoint, any ship can use this command, jumping to the target system's Jump Gate waypoint.\n\nWhen used elsewhere, jumping requires the ship to have a `Jump Drive` module installed and consumes a unit of antimatter from the ship's cargo. The command will fail if there is no antimatter to consume. When jumping via the `Jump Drive` module, the ship ends up at its largest source of energy in the system, such as a gas planet or a jump gate.","commands":{},"usage":"ships {ship symbol} jump {system symbol}","operationId":"jump-ship","props":[{"name":"systemSymbol","description":"The system symbol to jump to."}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/jump","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]},"NAVIGATE":{"description":"Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship's current location. Navigating will consume the necessary fuel from the ship's manifest based on the distance to the target waypoint.\n\nThe returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.\n\nTo travel between systems, see the ship's Warp or Jump actions.","commands":{},"usage":"ships {ship symbol} navigate {waypoint symbol}","operationId":"navigate-ship","props":[{"name":"waypointSymbol","description":"The target destination."}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/navigate","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]},"NAV":{"description":"","commands":{"SET":{"description":"Update the nav configuration of a ship.\n\nCurrently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.","commands":{},"usage":"ships {ship symbol} nav set {flight mode}","operationId":"patch-ship-nav","props":[{"name":"flightMode","options":["DRIFT","STEALTH","CRUISE","BURN"]}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/nav","apiAction":"patch","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]},"GET":{"description":"Get the current nav status of a ship.","commands":{},"usage":"ships {ship symbol} nav get","operationId":"get-ship-nav","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/nav","apiAction":"get","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]}}},"WARP":{"description":"Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship's manifest.\n\nThe returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.","commands":{},"usage":"ships {ship symbol} warp {waypoint symbol}","operationId":"warp-ship","props":[{"name":"waypointSymbol","description":"The target destination."}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/warp","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]},"SELL":{"description":"Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.","commands":{},"usage":"ships {ship symbol} sell {symbol} {units}","operationId":"sell-cargo","props":[{"name":"symbol","options":["PRECIOUS_STONES","QUARTZ_SAND","SILICON_CRYSTALS","AMMONIA_ICE","LIQUID_HYDROGEN","LIQUID_NITROGEN","ICE_WATER","EXOTIC_MATTER","ADVANCED_CIRCUITRY","GRAVITON_EMITTERS","IRON","IRON_ORE","COPPER","COPPER_ORE","ALUMINUM","ALUMINUM_ORE","SILVER","SILVER_ORE","GOLD","GOLD_ORE","PLATINUM","PLATINUM_ORE","DIAMONDS","URANITE","URANITE_ORE","MERITIUM","MERITIUM_ORE","HYDROCARBON","ANTIMATTER","FERTILIZERS","FABRICS","FOOD","JEWELRY","MACHINERY","FIREARMS","ASSAULT_RIFLES","MILITARY_EQUIPMENT","EXPLOSIVES","LAB_INSTRUMENTS","AMMUNITION","ELECTRONICS","SHIP_PLATING","EQUIPMENT","FUEL","MEDICINE","DRUGS","CLOTHING","MICROPROCESSORS","PLASTICS","POLYNUCLEOTIDES","BIOCOMPOSITES","NANOBOTS","AI_MAINFRAMES","QUANTUM_DRIVES","ROBOTIC_DRONES","CYBER_IMPLANTS","GENE_THERAPEUTICS","NEURAL_CHIPS","MOOD_REGULATORS","VIRAL_AGENTS","MICRO_FUSION_GENERATORS","SUPERGRAINS","LASER_RIFLES","HOLOGRAPHICS","SHIP_SALVAGE","RELIC_TECH","NOVEL_LIFEFORMS","BOTANICAL_SPECIMENS","CULTURAL_ARTIFACTS","REACTOR_SOLAR_I","REACTOR_FUSION_I","REACTOR_FISSION_I","REACTOR_CHEMICAL_I","REACTOR_ANTIMATTER_I","ENGINE_IMPULSE_DRIVE_I","ENGINE_ION_DRIVE_I","ENGINE_ION_DRIVE_II","ENGINE_HYPER_DRIVE_I","MODULE_MINERAL_PROCESSOR_I","MODULE_CARGO_HOLD_I","MODULE_CREW_QUARTERS_I","MODULE_ENVOY_QUARTERS_I","MODULE_PASSENGER_CABIN_I","MODULE_MICRO_REFINERY_I","MODULE_ORE_REFINERY_I","MODULE_FUEL_REFINERY_I","MODULE_SCIENCE_LAB_I","MODULE_JUMP_DRIVE_I","MODULE_JUMP_DRIVE_II","MODULE_JUMP_DRIVE_III","MODULE_WARP_DRIVE_I","MODULE_WARP_DRIVE_II","MODULE_WARP_DRIVE_III","MODULE_SHIELD_GENERATOR_I","MODULE_SHIELD_GENERATOR_II","MOUNT_GAS_SIPHON_I","MOUNT_GAS_SIPHON_II","MOUNT_GAS_SIPHON_III","MOUNT_SURVEYOR_I","MOUNT_SURVEYOR_II","MOUNT_SURVEYOR_III","MOUNT_SENSOR_ARRAY_I","MOUNT_SENSOR_ARRAY_II","MOUNT_SENSOR_ARRAY_III","MOUNT_MINING_LASER_I","MOUNT_MINING_LASER_II","MOUNT_MINING_LASER_III","MOUNT_LASER_CANNON_I","MOUNT_MISSILE_LAUNCHER_I","MOUNT_TURRET_I"]},{"name":"units","description":"Amounts of units to sell of the selected good."}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/sell","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"Symbol of a ship."}]},"SCAN":{"description":"","commands":{"SYSTEMS":{"description":"Scan for nearby systems, retrieving information on the systems' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.\n\nThe ship will enter a cooldown after using this function, during which it cannot execute certain actions.","commands":{},"usage":"ships {ship symbol} scan systems","operationId":"create-ship-system-scan","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/scan/systems","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]},"WAYPOINTS":{"description":"Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints' traits.\n\nRequires a ship to have the `Sensor Array` mount installed to use.\n\nThe ship will enter a cooldown after using this function, during which it cannot execute certain actions.","commands":{},"usage":"ships {ship symbol} scan waypoints","operationId":"create-ship-waypoint-scan","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/scan/waypoints","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]},"SHIPS":{"description":"Scan for nearby ships, retrieving information for all ships in range.\n\nRequires a ship to have the `Sensor Array` mount installed to use.\n\nThe ship will enter a cooldown after using this function, during which it cannot execute certain actions.","commands":{},"usage":"ships {ship symbol} scan ships","operationId":"create-ship-ship-scan","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/scan/ships","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]}}},"REFUEL":{"description":"Refuel your ship by buying fuel from the local market.\n\nRequires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.\n\nEach fuel bought from the market replenishes 100 units in your ship's fuel.\n\nShips will always be refuel to their frame's maximum fuel capacity when using this action.","commands":{},"usage":"ships {ship symbol} refuel","operationId":"refuel-ship","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/refuel","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship symbol."}]},"PURCHASE":{"description":"Purchase cargo from a market.\n\nThe ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.\n\nThe maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.\n\nPurchased goods are added to the ship's cargo hold.","commands":{},"usage":"ships {ship symbol} purchase {symbol} {units}","operationId":"purchase-cargo","props":[{"name":"symbol","options":["PRECIOUS_STONES","QUARTZ_SAND","SILICON_CRYSTALS","AMMONIA_ICE","LIQUID_HYDROGEN","LIQUID_NITROGEN","ICE_WATER","EXOTIC_MATTER","ADVANCED_CIRCUITRY","GRAVITON_EMITTERS","IRON","IRON_ORE","COPPER","COPPER_ORE","ALUMINUM","ALUMINUM_ORE","SILVER","SILVER_ORE","GOLD","GOLD_ORE","PLATINUM","PLATINUM_ORE","DIAMONDS","URANITE","URANITE_ORE","MERITIUM","MERITIUM_ORE","HYDROCARBON","ANTIMATTER","FERTILIZERS","FABRICS","FOOD","JEWELRY","MACHINERY","FIREARMS","ASSAULT_RIFLES","MILITARY_EQUIPMENT","EXPLOSIVES","LAB_INSTRUMENTS","AMMUNITION","ELECTRONICS","SHIP_PLATING","EQUIPMENT","FUEL","MEDICINE","DRUGS","CLOTHING","MICROPROCESSORS","PLASTICS","POLYNUCLEOTIDES","BIOCOMPOSITES","NANOBOTS","AI_MAINFRAMES","QUANTUM_DRIVES","ROBOTIC_DRONES","CYBER_IMPLANTS","GENE_THERAPEUTICS","NEURAL_CHIPS","MOOD_REGULATORS","VIRAL_AGENTS","MICRO_FUSION_GENERATORS","SUPERGRAINS","LASER_RIFLES","HOLOGRAPHICS","SHIP_SALVAGE","RELIC_TECH","NOVEL_LIFEFORMS","BOTANICAL_SPECIMENS","CULTURAL_ARTIFACTS","REACTOR_SOLAR_I","REACTOR_FUSION_I","REACTOR_FISSION_I","REACTOR_CHEMICAL_I","REACTOR_ANTIMATTER_I","ENGINE_IMPULSE_DRIVE_I","ENGINE_ION_DRIVE_I","ENGINE_ION_DRIVE_II","ENGINE_HYPER_DRIVE_I","MODULE_MINERAL_PROCESSOR_I","MODULE_CARGO_HOLD_I","MODULE_CREW_QUARTERS_I","MODULE_ENVOY_QUARTERS_I","MODULE_PASSENGER_CABIN_I","MODULE_MICRO_REFINERY_I","MODULE_ORE_REFINERY_I","MODULE_FUEL_REFINERY_I","MODULE_SCIENCE_LAB_I","MODULE_JUMP_DRIVE_I","MODULE_JUMP_DRIVE_II","MODULE_JUMP_DRIVE_III","MODULE_WARP_DRIVE_I","MODULE_WARP_DRIVE_II","MODULE_WARP_DRIVE_III","MODULE_SHIELD_GENERATOR_I","MODULE_SHIELD_GENERATOR_II","MOUNT_GAS_SIPHON_I","MOUNT_GAS_SIPHON_II","MOUNT_GAS_SIPHON_III","MOUNT_SURVEYOR_I","MOUNT_SURVEYOR_II","MOUNT_SURVEYOR_III","MOUNT_SENSOR_ARRAY_I","MOUNT_SENSOR_ARRAY_II","MOUNT_SENSOR_ARRAY_III","MOUNT_MINING_LASER_I","MOUNT_MINING_LASER_II","MOUNT_MINING_LASER_III","MOUNT_LASER_CANNON_I","MOUNT_MISSILE_LAUNCHER_I","MOUNT_TURRET_I"]},{"name":"units","description":"Amounts of units to purchase."}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/purchase","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship's symbol."}]},"TRANSFER":{"description":"Transfer cargo between ships.\n\nThe receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.\n\nThe response body's cargo shows the cargo of the transferring ship after the transfer is complete.","commands":{},"usage":"ships {ship symbol} transfer {trade symbol} {units} {ship symbol}","operationId":"transfer-cargo","props":[{"name":"tradeSymbol","options":["PRECIOUS_STONES","QUARTZ_SAND","SILICON_CRYSTALS","AMMONIA_ICE","LIQUID_HYDROGEN","LIQUID_NITROGEN","ICE_WATER","EXOTIC_MATTER","ADVANCED_CIRCUITRY","GRAVITON_EMITTERS","IRON","IRON_ORE","COPPER","COPPER_ORE","ALUMINUM","ALUMINUM_ORE","SILVER","SILVER_ORE","GOLD","GOLD_ORE","PLATINUM","PLATINUM_ORE","DIAMONDS","URANITE","URANITE_ORE","MERITIUM","MERITIUM_ORE","HYDROCARBON","ANTIMATTER","FERTILIZERS","FABRICS","FOOD","JEWELRY","MACHINERY","FIREARMS","ASSAULT_RIFLES","MILITARY_EQUIPMENT","EXPLOSIVES","LAB_INSTRUMENTS","AMMUNITION","ELECTRONICS","SHIP_PLATING","EQUIPMENT","FUEL","MEDICINE","DRUGS","CLOTHING","MICROPROCESSORS","PLASTICS","POLYNUCLEOTIDES","BIOCOMPOSITES","NANOBOTS","AI_MAINFRAMES","QUANTUM_DRIVES","ROBOTIC_DRONES","CYBER_IMPLANTS","GENE_THERAPEUTICS","NEURAL_CHIPS","MOOD_REGULATORS","VIRAL_AGENTS","MICRO_FUSION_GENERATORS","SUPERGRAINS","LASER_RIFLES","HOLOGRAPHICS","SHIP_SALVAGE","RELIC_TECH","NOVEL_LIFEFORMS","BOTANICAL_SPECIMENS","CULTURAL_ARTIFACTS","REACTOR_SOLAR_I","REACTOR_FUSION_I","REACTOR_FISSION_I","REACTOR_CHEMICAL_I","REACTOR_ANTIMATTER_I","ENGINE_IMPULSE_DRIVE_I","ENGINE_ION_DRIVE_I","ENGINE_ION_DRIVE_II","ENGINE_HYPER_DRIVE_I","MODULE_MINERAL_PROCESSOR_I","MODULE_CARGO_HOLD_I","MODULE_CREW_QUARTERS_I","MODULE_ENVOY_QUARTERS_I","MODULE_PASSENGER_CABIN_I","MODULE_MICRO_REFINERY_I","MODULE_ORE_REFINERY_I","MODULE_FUEL_REFINERY_I","MODULE_SCIENCE_LAB_I","MODULE_JUMP_DRIVE_I","MODULE_JUMP_DRIVE_II","MODULE_JUMP_DRIVE_III","MODULE_WARP_DRIVE_I","MODULE_WARP_DRIVE_II","MODULE_WARP_DRIVE_III","MODULE_SHIELD_GENERATOR_I","MODULE_SHIELD_GENERATOR_II","MOUNT_GAS_SIPHON_I","MOUNT_GAS_SIPHON_II","MOUNT_GAS_SIPHON_III","MOUNT_SURVEYOR_I","MOUNT_SURVEYOR_II","MOUNT_SURVEYOR_III","MOUNT_SENSOR_ARRAY_I","MOUNT_SENSOR_ARRAY_II","MOUNT_SENSOR_ARRAY_III","MOUNT_MINING_LASER_I","MOUNT_MINING_LASER_II","MOUNT_MINING_LASER_III","MOUNT_LASER_CANNON_I","MOUNT_MISSILE_LAUNCHER_I","MOUNT_TURRET_I"]},{"name":"units","description":"Amount of units to transfer."},{"name":"shipSymbol","description":"The symbol of the ship to transfer to."}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/transfer","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The transferring ship's symbol."}]},"NEGOTIATE":{"description":"","commands":{"CONTRACT":{"description":"Negotiate a new contract with the HQ.\n\nIn order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.\n\nOnce a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept. \n\nThe ship must be present at a faction's HQ waypoint to negotiate a contract with that faction.","commands":{},"usage":"ships {ship symbol} negotiate contract","operationId":"negotiateContract","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/negotiate/contract","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship's symbol."}]}}},"MOUNTS":{"description":"Get the mounts installed on a ship.","commands":{"INSTALL":{"description":"Install a mount on a ship.\n\nIn order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.\n\nAn installation fee will be deduced by the Shipyard for installing the mount on the ship. ","commands":{},"usage":"ships {ship symbol} mounts install {symbol}","operationId":"install-mount","props":[{"name":"symbol"}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/mounts/install","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship's symbol."}]},"REMOVE":{"description":"Remove a mount from a ship.\n\nThe ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.\n\nA removal fee will be deduced from the agent by the Shipyard.","commands":{},"usage":"ships {ship symbol} mounts remove {symbol}","operationId":"remove-mount","props":[{"name":"symbol","description":"The symbol of the mount to remove."}],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/mounts/remove","apiAction":"post","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship's symbol."}]}},"usage":"ships {ship symbol} mounts","operationId":"get-mounts","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}/mounts","apiAction":"get","apiAuth":true,"params":[{"name":"shipSymbol","description":"The ship's symbol."}]}},"param":"{shipSymbol}","usage":"ships {ship symbol}","operationId":"get-my-ship","props":[],"jsonData":[],"apiPath":"/my/ships/{shipSymbol}","apiAction":"get","apiAuth":true,"params":[{"name":"shipSymbol","description":"The symbol of the ship."}]}}}}}