// Use type safe message keys with `next-intl`
type Messages = typeof import("./en-US/index.json");
declare interface IntlMessages extends Messages {}
