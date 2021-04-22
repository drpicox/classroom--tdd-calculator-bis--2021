This repository correspond to the TDD Calculator assignment.

> **Important change**: This repository includes eslint checking.
> Make sure that you execute before each commit:
>
> ```bash
> $ yarn lint
> ```
>
> You should see it pass all the rules without error for each commit.
> In theory, it is activated so it does not allow a commit
> if linting rules are failing, but I am not sure about windows.
> If yarn lint says ok but you have problems, please,
> select the option to bypass commit hooks.

> **Linting in tests**: Jest is configured to check eslint rules.
> You will see an output like:
> 
> ```
> PASS   test  src/calculator.spec.js
> PASS   lint  src/calculator.js
> 
> Test Suites: 2 passed, 2 total
> Tests:       2 passed, 2 total
> Snapshots:   0 total
> Time:        1.726 s
> ```
> 
> The `PASS test` is the result of regular tests, 
> the `PASS lint` is the result of executing lint.
> 
> It is important to remark that this does not substitute the command
> `yarn lint`. You should run it before each commit,
> and you should execute the script below in the 
> lint section to lint all your commits.

> **Coverage report**: The coverage report is active in the testing.
> The coverage objective is the 100%.
>
> Failing to met coverage objectives does not make the test
> fail, but the report explains that is expected:
> 
> ```
> PASS   test  src/calculator.spec.js
> PASS   lint  src/calculator.js
> ---------------|---------|----------|---------|---------|-------------------
> File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
> ---------------|---------|----------|---------|---------|-------------------
> All files      |   77.78 |       50 |   66.67 |    87.5 |                   
>  calculator.js |   77.78 |       50 |   66.67 |    87.5 | 12                
> ---------------|---------|----------|---------|---------|-------------------
> Jest: "global" coverage threshold for statements (100%) not met: 77.78%
> Jest: "global" coverage threshold for branches (100%) not met: 50%
> Jest: "global" coverage threshold for lines (100%) not met: 87.5%
> Jest: "global" coverage threshold for functions (100%) not met: 66.67%

> Test Suites: 2 passed, 2 total
> Tests:       2 passed, 2 total
> Snapshots:   0 total
> Time:        0.16 s, estimated 1 s
> Ran all test suites in 2 projects.
> ```
> Here you can see that the coverage is broken because there are
> uncovered statements, uncovered branches, uncovered lines,
> and uncovered functions. It also hints to look to the line 12
> (althouth the uncovered branch is at line 6).
> The coverage must be 100% in all the tests.
## Setup

### Environment

- Node v14: https://nodejs.org/en/
  (alternative if Mac/Linux https://github.com/nvm-sh/nvm )
- Yarn v2: https://yarnpkg.com/getting-started/install

### Setup

Once you download it, add all libraries by executing:

```zsh
$ yarn
```

### Run

```zsh
$ yarn test
```

The initial test result is the following:

```
 FAIL  src/calculator.spec.js
  ✕ 1 | "" (1ms)

  ● 1 | ""

    TypeError: _calculator.Calculator is not a constructor

       7 |   ${1}  | ${""}
       8 | `('$order | "$sequence"', ({ sequence }) => {
    >  9 |   expect(new Calculator()).toSatisfy(sequence)
         |          ^
      10 | })
      11 |
      12 | /*

      at src/calculator.spec.js:9:10

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.375s, estimated 1s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```

### Linting

Make sure that all commits pass the linting.
Just to make sure, run the following script in Bash o Zsh when all
changes are commit and ready to deliver:

```bash
$ for sha in $(git log --format='%H' --reverse); do echo Commit: $sha; git checkout --force $sha; if ! yarn lint; then break; fi; done
# And return to the main branch
$ git checkout --force main
```

This scripts checkouts all of each of your commits and executes the
lint to check if all the commits passes the linting.

If any commit fails to pass the linting you will read a message like:

```bash
$ eslint --no-inline-config 'src/**/*.js'

/Volumes/Projects/tecnocampus/ES3/classroom--tdd-calculator-bis--2021-solved/src/calculator.js
  26:1  error  Unexpected console statement  no-console

✖ 1 problem (1 error, 0 warnings)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

To fix it, create a temporary branch, return to the main branch, 
reset the branch to the first failing commit, fix it, and
start cherry-picking commits from the temporary branch. Once all
commits are fixed and present, remove the temporary branch and 
force push changes.

> **Warning**: Be careful, if the script found something wrong, 
> it "creates" a temporary branch HEAD in the failing commit. 
> You have to deliver the main branch (or master).
> The HEAD branch disappears as soon as you change branch.


### Test the coverage of all commits

If you have been saving all the commits with only running tests, you can run the following Bash script to check
that the coverage is 100% at all times:

```bash
for sha in $(git log --format='%H' --reverse); do echo Commit: $sha; git checkout --force $sha; if ! yarn test:coverage; then break; fi; done
```

If it fails, or you cancel it, please check in which commit the git HEAD is present.


## Instructions

### Operators

You can use javascript native operators for addition and multiplication.

### Transformations

See https://www.youtube.com/watch?v=VW4hHaid3PE

When refactoring or fixing a test in production code,
pick always the first transformation of the following
list:

1. Null
2. Null to Constant
3. Constant to Variable
4. Add Computation
5. Split Flow
6. Variable to Array
7. Array to Container
8. If to While
9. Recurse
10. Iterate
11. Assign
12. Add Case

### Tests

Tests are already written.
You have to write no tests.

There is only one test function call,
which executes a table of tests.

Initially there is only one table test line.
The rest of lines that you have to execute
are below in a comment.

### Order

There are test table lines inside a comment below
the test function call.

This comment contains all test table lines
that you have to implement.
Each line has an order number that you have to respect.

In order to complete the assignment
move one by one
to the test function call
and solve each before passing to the next one.
Ex:

```javascript
test.each`
  order | sequence
  ${1}  | ${""}
`('$order | "$sequence"', ({ sequence }) => {
  expect(new Calculator()).toSatisfy(sequence)
})

/*
  order | sequence
  ${2}  | ${"[0]"}
  ${3}  | ${"0[0]"}
  ${4}  | ${"1[1]"}
  ${5}  | ${"56[56]"}
  ...
```

Once the first is solved, copy the next test, and make it pass:

```javascript
test.each`
  order | sequence
  ${1}  | ${""}
  ${2}  | ${"[0]"}
`('$order | "$sequence"', ({ sequence }) => {
  expect(new Calculator()).toSatisfy(sequence)
})

/*
  order | sequence
  ${3}  | ${"0[0]"}
  ${4}  | ${"1[1]"}
  ${5}  | ${"56[56]"}
  ...
```

And so on:

```javascript
test.each`
  order | sequence
  ${1}  | ${""}
  ${2}  | ${"[0]"}
  ${3}  | ${"0[0]"}
`('$order | "$sequence"', ({ sequence }) => {
  expect(new Calculator()).toSatisfy(sequence)
})

/*
  order | sequence
  ${4}  | ${"1[1]"}
  ${5}  | ${"56[56]"}
  ...
```

Continue in order until implementing all test table lines inside the comment.

**Important**:
Follow the exact order and fix
the minimal amount of your production code
in order to pass the test.

It is possible that time to time you pass more than one
test table line. It happens, but not often.
Just double check if you are not coding more than necessary.

### Commits

You have to do a commit for each test that you pass.
Name the commit as: "Test table line X"
where X is the test table line order number.

If you forgot to commit,
undo the changes,
reset to a previous commit,
and redo again from the last correct commit.

### Linting

This project provides a linting configuration. You must
follow the linting rules in all of each one of your commits.

To know the status of your linting, execute:

```bash
$ yarn lint
```

It is recommended to install and use in the VSCode the extensions
for the eslint and for prettier.

The linting checks the following parameters:

- All the code is formatted according prettier specs
- The maximum cyclomatic complexity is 6
- The maximum depth of for/while/... is 2
- The maximum lines per function is 20
- The maximum arguments per function is 3
- There are not nested callbacks
- There is no use of eval or console.

Make sure that prettier is configured and all files are 
formatted correctly.

The cyclomatic complexity counts how many branches there
are inside one function. Code branches are created from
if, while, for, case, &&, ||, …. The maximum per function
is 6. https://en.wikipedia.org/wiki/Cyclomatic_complexity

The maximum code block depth is the maximum number of code
blocks that you can nest one inside the other. It is usually
ifs inside ifs, for inside fors, ifs inside fors, and so on.
The maximum depth is two per function.

The maximum lines per function is 20. It takes into account
that prettier forces to rewrite functions so they are easy
to read, that makes functions to have more lines and do not
accumulate too many instructions in one single line.
The number of lines takes into account also blank lines
and comments.

The three previous limits are easy to solve by creating 
self-explanatory easy to read auxiliary functions. Best
to create them as quick as they are required by cleaning,
but if any limit shows up, refactor it.

The argument limit per function is 3 arguments. If you
want to pass more arguments, please consider to use an
object.

Nested callbacks are functions inside functions. This is a
typical problem in functional languages. If it fires,
just create easy to understand named functions.

And eval and console are forbidden. Do not use them.
Neither install and use any additional library.
Keep your code inside the src/ folder, and do not
import anything else than your own code.

### Grades

This practice evaluates how good are you following TDD.

For this reason,
the teacher will subsitute the testing file by its own,
and will test commit by commit
to know how you have been progressing in the implementation.

Your **grade can be reduced by** the following parameters:

- you do not pass secret teacher tests (extra checks that logic is correct),
- you pass too many commits at once,
- you skip the order and solve test table lines out of order,
- you do not **keep a clean production code** at all times,

Expect to have a 0:

- the linting fails in one or more commits
- you change the expected API for the Calculator class (it emerges from tests)
- you use the `eval` function or any library to solve it

Expect to have a 0 in this assignment and as final grade if:

- you cheat (copy from other colleages or copy a solution from internet)

The **maximum grade** is 10 if you implement 100% of the orders,
5 if you implement the 50%, and so on.
