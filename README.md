# 🌍 Wild Horizons API

**Wild Horizons API** is a simple, read-only REST API built using **vanilla Node.js**, designed as part of the _Learn Node.js_ course by Scrimba. It provides fascinating data about natural wonders and extraordinary geographic locations across the globe.

This project is ideal for learning how APIs work without relying on frameworks or external databases.

---

## 🔧 Features

- Built using core Node.js modules (no frameworks)
- Serves JSON data of 20+ real and unique natural wonders
- RESTful endpoints (GET-only)
- Great for frontend project mock data or learning API integration

---
## API Reference
The API supports the GET endpoints only.

### 1. `GET /api`

Returns all destinations or filters them based on query parameters.

#### 🔹 Query Parameters (optional)

| Parameter     | Type   | Description                                  |
|---------------|--------|----------------------------------------------|
| `country`     | string | Filter by country name                       |
| `continent`   | string | Filter by continent name                    |
| `is_open_to_public` | boolean (`true` / `false`) | Filter by access availability |

#### ✅ Example Request

```http
GET /api?continent=Asia&is_open_to_public=true
```

#### 🔁 Example Response

```json
[
  {
    "name": "Red Beach",
    "location": "Panjin",
    "country": "China",
    "continent": "Asia",
    "is_open_to_public": true,
    ...
  },
  ...
]
```

### 2. `GET /api/continent/:continent`

Returns destinations filtered by a specific continent

#### 🔹 Path Parameters

| Parameter     | Type   | Description                                  |
|---------------|--------|----------------------------------------------|                    
| `:continent`   | string | Filter by continent name                    |

#### ✅ Example Request

```http
GET /api/continent/oceania
```

#### 🔁 Example Response

```json
[
  {
    "name": "Waitomo Glowworm Caves",
    "continent": "Oceania",
    ...
  },
  ...
]
```

### 3. `GET /api/continent/:country`

Returns destinations filtered by a specific country

#### 🔹 Path Parameters

| Parameter     | Type   | Description                                  |
|---------------|--------|----------------------------------------------|                    
| `:country`   | string | Filter by country name                    |

#### ✅ Example Request

```http
GET /api/continent/brazil
```

#### 🔁 Example Response

```json
[
  {
    "name": "Snake Island",
    "country": "Brazil",
    ...
  }
]

```
### ❌ 4. Invalid Route
If the requested route does not match any valid endpoint, the server responds with a 404 error.

🔁 Example Response
```json
{
  "error": "Not Found",
  "message": "The requested route does not exist"
}

```

### Response Format
All responses are returned as `application/json` and contain either:
- An array of matching places
- Or an error object with status `404 Not Found`
---
## 🗃 Data Structure
Each place in the API has the following structure:
```ts
{
  name: string;
  location: string;
  country: string;
  continent: string;
  is_open_to_public: boolean;
  details: [
    { fun_fact: string },
    { description: string }
  ];
  uuid: string;
}

```

## 🧠 Educational Purpose
This project is not meant for production. It’s a learning tool that:

Demonstrates building an HTTP server using the http module

Teaches routing, file handling, and JSON manipulation in Node.js

Helps frontend developers practice consuming real-world structured data

## 🙌 Acknowledgments
Created as part of [Scrimba's Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6) course. Dataset includes real-world geographical wonders curated for learning.
