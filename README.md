## Vynca Challenges

[Demo](http://carr1005.github.io/vynca-challenges/)

## To ve improved
- [x] - Index as a key is an anti-pattern. 

[Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)

[How to NOT React: Common Anti-Patterns and Gotchas in React](https://codeburst.io/how-to-not-react-common-anti-patterns-and-gotchas-in-react-40141fe0dcd)
> * Unique — The key of an element should be unique among its siblings. It is not necessary to have globally unique keys.
> * Stable — The key for the same element should not change with time, or page refresh, or re-ordering of elements.
> * Predictable — You can always get the same key again if you want. That is, the key should not be generated randomly.  

> Array indexes are unique, and predictable. However, they are not stable. In the same vein, random numbers or timestamps should not be used as keys.

> In general, you should rely on the ID generated by databases such as primary key in Relational databases ...


- [ ] - Typechecking.  

- [x] - Missing dependencies.   

- Avoid unnecessary re-rendering.  

[![Edit Update](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/oox46oww46)



