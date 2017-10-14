export class Notice {
    "author": {
        "avatar": string
      };
      "offer": {
        "title": string,
        "address": string,
        "price": number,
        "type": string,
        "rooms": number,
        "guests": number,
        "checkin": string,
        "checkout": string,
        "features": Array<string>,
        "description": string,
        "photos": Array<string>
      };
      "location": {
        "x": number,
        "y": number
      }
}