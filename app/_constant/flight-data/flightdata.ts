import { EmiratesFirstImage, EmiratesSecondImage, LufthansaFirstImage, LufthansaSecondImage } from "../images/images";

const flightData = [
    {
        "flights": [
            {
                "id": "1",
                "firstFlight": {
                    "airline": "Emirates",
                    "flightNumber": "AT 4334",
                    "departureTime": "9:45 AM",
                    "arrivalTime": "11:45 AM",
                    "nextDay": false,
                    "duration": "2h 10min",
                    "stops": "Non stop",
                    "route": {
                        "from": "CDG",
                        "to": "DXB"
                    },
                    "imageUrl": EmiratesFirstImage
                },
                "secondFlight": {
                    "airline": "Qatar Airways",
                    "flightNumber": "QR 7856",
                    "departureTime": "1:00 PM",
                    "arrivalTime": "3:30 PM",
                    "nextDay": true,
                    "duration": "2h 30min",
                    "stops": "2 stop",
                    "stopDetails": "1h 45m in Doha",
                    "route": {
                        "from": "CDG",
                        "to": "DOH"
                    },
                    "imageUrl": EmiratesSecondImage
                }
            },
            {
                "id": "2",
                "firstFlight": {
                    "airline": "Lufthansa",
                    "flightNumber": "AT 4334",
                    "departureTime": "11:45 PM",
                    "arrivalTime": "6:45 AM",
                    "nextDay": false,
                    "duration": "4h 10min",
                    "stops": "1 stops",
                    "stopDetails": "6h 32m in Lisbon, P...",
                    "route": {
                        "from": "DXB",
                        "to": "CDG"
                    },
                    "imageUrl": LufthansaFirstImage
                },
                "secondFlight": {
                    "airline": "Singapore Airlines",
                    "flightNumber": "SQ 241",
                    "departureTime": "10:15 AM",
                    "arrivalTime": "12:30 PM",
                    "nextDay": true,
                    "duration": "2h 15min",
                    "stops": "1 stop",
                    "stopDetails": "Lisbon",
                    "route": {
                        "from": "SIN",
                        "to": "BKK"
                    },
                    "imageUrl": LufthansaSecondImage
                }
            },
            {
                "id": "3",
                "firstFlight": {
                    "airline": "Lufthansa",
                    "flightNumber": "AT 4334",
                    "departureTime": "11:45 PM",
                    "arrivalTime": "6:45 AM",
                    "nextDay": false,
                    "duration": "4h 10min",
                    "stops": "2 stops",
                    "stopDetails": "6h 32m in Lisbon, P...",
                    "route": {
                        "from": "DXB",
                        "to": "CDG"
                    },
                    "imageUrl": LufthansaFirstImage
                },
                "secondFlight": {
                    "airline": "Singapore Airlines",
                    "flightNumber": "SQ 241",
                    "departureTime": "10:15 AM",
                    "arrivalTime": "12:30 PM",
                    "nextDay": true,
                    "duration": "2h 15min",
                    "stops": "Non stop",
                    "route": {
                        "from": "SIN",
                        "to": "BKK"
                    },
                    "imageUrl": LufthansaSecondImage
                }
            },
            {
                "id": "4",
                "firstFlight": {
                    "airline": "Lufthansa",
                    "flightNumber": "AT 4334",
                    "departureTime": "11:45 PM",
                    "arrivalTime": "6:45 AM",
                    "nextDay": false,
                    "duration": "4h 10min",
                    "stops": "2 stops",
                    "stopDetails": "6h 32m in Lisbon, P...",
                    "route": {
                        "from": "DXB",
                        "to": "CDG"
                    },
                    "imageUrl": LufthansaFirstImage
                },
                "secondFlight": {
                    "airline": "Singapore Airlines",
                    "flightNumber": "SQ 241",
                    "departureTime": "10:15 AM",
                    "arrivalTime": "12:30 PM",
                    "nextDay": true,
                    "duration": "2h 15min",
                    "stops": "Non stop",
                    "route": {
                        "from": "SIN",
                        "to": "BKK"
                    },
                    "imageUrl": LufthansaSecondImage
                }
            },
            {
                "id": "5",
                "firstFlight": {
                    "airline": "Lufthansa",
                    "flightNumber": "AT 4334",
                    "departureTime": "11:45 PM",
                    "arrivalTime": "6:45 AM",
                    "nextDay": false,
                    "duration": "4h 10min",
                    "stops": "2 stops",
                    "stopDetails": "6h 32m in Lisbon, P...",
                    "route": {
                        "from": "DXB",
                        "to": "CDG"
                    },
                    "imageUrl": LufthansaFirstImage
                },
                "secondFlight": {
                    "airline": "Singapore Airlines",
                    "flightNumber": "SQ 241",
                    "departureTime": "10:15 AM",
                    "arrivalTime": "12:30 PM",
                    "nextDay": false,
                    "duration": "2h 15min",
                    "stops": "Non stop",
                    "route": {
                        "from": "SIN",
                        "to": "BKK"
                    },
                    "imageUrl": LufthansaSecondImage
                }
            },
            {
                "id": "6",
                "firstFlight": {
                    "airline": "Lufthansa",
                    "flightNumber": "AT 4334",
                    "departureTime": "11:45 PM",
                    "arrivalTime": "6:45 AM",
                    "nextDay": true,
                    "duration": "4h 10min",
                    "stops": "2 stops",
                    "stopDetails": "6h 32m in Lisbon, P...",
                    "route": {
                        "from": "DXB",
                        "to": "CDG"
                    },
                    "imageUrl": LufthansaFirstImage
                },
                "secondFlight": {
                    "airline": "Singapore Airlines",
                    "flightNumber": "SQ 241",
                    "departureTime": "10:15 AM",
                    "arrivalTime": "12:30 PM",
                    "nextDay": false,
                    "duration": "2h 15min",
                    "stops": "Non stop",
                    "route": {
                        "from": "SIN",
                        "to": "BKK"
                    },
                    "imageUrl": LufthansaSecondImage
                }
            },
            {
                "id": "7",
                "firstFlight": {
                    "airline": "Lufthansa",
                    "flightNumber": "AT 4334",
                    "departureTime": "11:45 PM",
                    "arrivalTime": "6:45 AM",
                    "nextDay": true,
                    "duration": "4h 10min",
                    "stops": "2 stops",
                    "stopDetails": "6h 32m in Lisbon, P...",
                    "route": {
                        "from": "DXB",
                        "to": "CDG"
                    },
                    "imageUrl": LufthansaFirstImage
                },
                "secondFlight": {
                    "airline": "Singapore Airlines",
                    "flightNumber": "SQ 241",
                    "departureTime": "10:15 AM",
                    "arrivalTime": "12:30 PM",
                    "nextDay": false,
                    "duration": "2h 15min",
                    "stops": "Non stop",
                    "route": {
                        "from": "SIN",
                        "to": "BKK"
                    },
                    "imageUrl": LufthansaSecondImage
                }
            }
        ]
    }
]

export { flightData };
