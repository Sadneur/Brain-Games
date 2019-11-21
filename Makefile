install:
	npm install
publish:
	npm publish --dry-run
lint:
	npx eslint
brain-even:
	npx babel-node src/bin/brain-even.js
brain-calc:
	npx babel-node src/bin/brain-calc.js
brain-gcd:
	npm babel-node src/bin/brain-gcd.js
brain-progression:
	npm babel-node src/bin/brain-progression.js