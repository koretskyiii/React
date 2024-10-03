# Практична робота №1 - Компоненти

https://github.com/user-attachments/assets/a72bbafa-0b73-4228-970f-326d6187d08e

Для виконання виданого завдання зі створення піаніно було використано 2 компоненти:
### 1. Компонент клавіші - [Key](https://github.com/koretskyiii/React/tree/0e7d410610c0cef8e080d7d3d875e5218b1f7e99/lab1/piano/src/components/Piano/Key), найменша структурна одиниця додатку, містить по суті всю логіку взаємодії користувача з піаніно:
- запуск анімації при події кліку (що викликається через зміну стану хука useState)
```js
const [isPressed, setPressed] = useState(false)
const keyClass = isPressed ? styles.pressed : '';
...
```
-  виведення звуку ноти за тригером до події
```js
    function handleClick(note) {
        const audio = new Audio(`/notes/${playNotes[note]}.mp3`)
        audio.play()
      ...
```
Тут же відбувається зміна стану стейта + відповідно запуск анімації клавіші
```js
      ...
        setPressed(true); // зміна стану + відповідно запуск анімації клавіші
        setTimeout(() => setPressed(false), 200);
    }
```
Прив'язка події кліку до компонента:
```js
onClick={() => handleClick(note)}
```
[link на дану прив'язку](https://github.com/koretskyiii/React/blob/0e7d410610c0cef8e080d7d3d875e5218b1f7e99/lab1/piano/src/components/Piano/Key/Key.jsx#L23C42-L23C75)
-  логіка визначення даної компоненти відповідно до ноти (яка передається в пропсах) - чорна чи біла клавіша
```js
    if (notes.includes(note)) {
        let bW = note.includes("дієз") ? "black" : "white"
        if (bW == "white") {
    ...
```

### 2. Компонент Піаніно - [Piano](https://github.com/koretskyiii/React/blob/0e7d410610c0cef8e080d7d3d875e5218b1f7e99/lab1/piano/src/components/Piano/Piano.jsx), який "збирає" клавіші в готовий інструмент:
- Створює визначену та єдину послідовність клавіш, нота передається як prop(s)
```js
      ...
                <Key note="До"/>
                <Key note="До дієз"/>
      ...
```
даний проп (він один) приймається в компонеті Key
```js
  Key({note})
```
та визначає вид (чи бажаєте - колір) клавіші, що було показано вище 

### 3. Компонент заголовку - [Header](https://github.com/koretskyiii/React/tree/0e7d410610c0cef8e080d7d3d875e5218b1f7e99/lab1/piano/src/components/Header)
> А воно треба?)

