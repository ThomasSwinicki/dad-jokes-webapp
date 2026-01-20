# Dad Jokes App

A simple Angular web application that fetches and displays random dad jokes using the [Dad Jokes API](https://github.com/DadJokes-io/Dad_Jokes_API).

## Features

- Landing page with "Want to hear a joke?" prompt
- Fetches random jokes from the API
- Two-step joke reveal: setup first, then punchline
- "Tell a different joke" button to get a new joke

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

## API Configuration

The app includes mock jokes for testing. To use the real Dad Jokes API:

1. Get an API key from [RapidAPI - Dad Jokes](https://rapidapi.com/KegenGuyll/api/dad-jokes1)
2. Update `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  rapidApiKey: 'your-actual-api-key'
};
```

## Building

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

## Running Tests

```bash
ng test
```
