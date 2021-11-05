# Code Snippets

## #1 To make an API Call

- Added By: @PasinduDew
- Source Ref: https://dev.to/blindkai/managing-api-layers-in-vue-js-with-typescript-hno

```js
const [error, data, options] = await exampleAPI.method(paramsToBePassed);

if (error) {
  // API error handling based on HTTP error codes
  if (options?.code === 401) {
    // Add Code to Handle Error;
  }
  if (options?.code === 400) {
    // Add Code to Handle Error;
  }
} else {
  // Success
  console.log(data);
}
```

---

## Log Error to Firestore Database

- Added By: @PasinduDew
- Source Ref: -

```js
// Log Error to Firestore
this.$store.dispatch("loggerError", {
  pageURL: window.location.href,
  errorMessage: err.message,
});
```
