# Which? Javascript Exercise - @csi-lk

## 🔥 Quick Start

```
yarn
yarn build
```

## Developing

```
yarn start
```

http://localhost:8080

## Testing

Using jest

```
yarn test
```

Linting

```
yarn lint
```

---

Here's my braindump from when I forked the task, it will contain a lot of my notes to give you an idea of how I work / approach tasks etc.
(It may be a little rough from a grammar and spelling perspective though 🙃)

## Notes

I had a little confusion around the requirements, usually in a workdplace setting I would chat to the product owner / tech lead to clarify before working (or maybe within a 3 amigos session or planning), as the recruiter wanted me to turn this around within the night I have coded for both interpretations (as they didn't take much time to do), the simpler one of 'multiples of a number' and the more complicated one of 'divisible by these numbers', have split them into seperate libraries and 'highlighted' them differently, ill add config

- TDD
  - use wallaby to speed up delivery
  - jest-image-snapshot for visuall regression
- Code
  - Doesn't need a framework
  - Css use postcss so mainly for vars to make this more extensible \* Have config vars for the number range

## Analysis - 20mins

I like to break down tasks in to manageble chunks before starting them, understand the whole problem / do the research up front then smash through it.
Means if I run into a problem or a unexplained requirement I can get feedback up front which may change the implementation

- Upgrade all deps
- Install extra deps eslint / prettier / postcss / testing-library / @testing-library/dom / @testing-library/jest-dom / jest-image-snapshot
- Setup eslint and prettier configs
- Create tests
  - Should generate n buttons on the page
  - When I click n number it should highlight [Array] numbers
    - `57 = [ 1, 3, 19, 57, 57, 114 ]` for eg.
  - When I click n number twice it should no longer show multiples highlighted \* Breakpoints (visual regression)
- Create functions
  - Takes a number and generates buttons on a page with that amount
  - Get number from env to allow this to be config'd
  - Utalise event bubbling rather than having `n` event listeners
  - Use data-attributes maybe `data-number="n"`
  - Get multiples of number
  - Something like `const multiples = (numbers, number) => numbers.filter(n => !(n % number));`
  - Toggle class on divs
  - Keep last number selected in state
  - Current div should also have different highlighted class to show selected number
  - Don't forget touch (test this)
- CSS
  - Center align text in each box
  - Breakpoint flex per row (I was cheeky and copied the breakpoints from the which.co.uk website)
  - Mobile = 1
  - Default
  - Tablet = 2
  - `min-width: 768px`
  - Desktop = 3
  - `min-width: 1024px`
  - Max width container (desktop large)
  - `min-width: 1270px`

## Final Notes

Spent about 2.t hours total active time on it, it seems that I have hit all the requirements but missed some things from my initial plan, and as always it could be better 😉

If I had more time i'd:

- use typescript
- get the visual regression tests working
- randomize the integration tests with `faker`
- generate the 144 buttons at build time rather than run time
- do some more abstraction

Oh I also copy+pasted a bit of config from my [webite repo](https://github.com/csi-lk/csi.lk) to speed up delivery

Overall am happy with the readability and extensibility of what i've put together

## Resources

- https://github.com/csi-lk/fe-techtest#the-exercise
- https://github.com/americanexpress/jest-image-snapshot
