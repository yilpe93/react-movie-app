# Nomflix

.env 파일 생성

```bash
$ yarn add prop-types
```

## React Router 연결

```bash
$ yarn add react-router-dom
```

Components 디렉토리 안에 Router.js 파일 생성.

History Mode로서 `HashRouter` / `BorwserRouter` 두 개가 존재한다.

```JS
// Router.js
import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

export default () => (
    <Router>
        <Switch>
            <Router path="/" exact component={} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)

```

`<Route /> 태그`는 `<Router> 태그` 안에서만 존재 해야한다.

`Redirect`는 일치하는 Route가 없다면 to 속성을 통해서 이에 설정된 Route로 Error와 함께 Redirect 시킨다.

`Switch`는 한 번에 오직 하나의 Route만 Render하게 해준다.

## React CSS 적용 방법

### 1. CSS Module

해당 Component에만 CSS를 적용시키기 위해서는 module css를 만들 필요가 있다.
이는 Global CSS로서 적용 시키지 않기 위함이기도 하다.

해당 Component 디렉토리에 Component.module.css 파일을 만들고

```JS
// Header.js

...
import styles from "./Header.module.css";

export default () => (
    <header>
        <ul className={styles.navList}>
            ...
        </ul>
    </header>
);

```

```CSS
/* Header.module.css */

.navList {
    display: flex;
}
```

위와 같이하면 Global이 아닌 해당 Component에서의 유일한 CSS로 적용시킬 수 있다.

유의 사항으로는 className으로는 카멜기법(navList)를 사용해야한다.

### 2. styled-components

```bash
$ yarn add styled-components
```

```js
// Header.js

...
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    &:hover {
        background: blue;
    }
`;

export default () => (
    <header>
        <List>
            ...
        </List>
    </header>
);

```
