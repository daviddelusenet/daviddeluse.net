module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
    },
    settings: {
        jsx: true,
    },
    plugins: [
        'babel',
        'react',
        'prettier',
    ],
    extends: [
        'airbnb',
        'prettier',
        'prettier/babel',
        'prettier/react',
    ],
    rules: {
        'babel/semi': 1,
        'brace-style': [2, '1tbs'],
        curly: [2, 'all'],
        'import/no-extraneous-dependencies': 0,
        'import/order': 0,
        'jsx-a11y/anchor-is-valid': [2, {
            components: ['Link'],
            specialLink: ['to']
        }],
        'jsx-a11y/media-has-caption': 0,
        'object-property-newline': [2, {
            allowAllPropertiesOnSameLine: false,
        }],
        'padding-line-between-statements': [2,
            {
                blankLine: 'always',
                prev: ['case', 'multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var'],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var', 'return'],
            },
        ],
        'prettier/prettier': 2,
        'react/jsx-filename-extension': 0,
        'react/jsx-key': [2, {
            checkFragmentShorthand: true,
        }],
        'react/jsx-max-props-per-line': [2, {
            maximum: 3,
        }],
        'react/jsx-one-expression-per-line': [2, {
            allow: 'literal',
        }],
        'react/jsx-sort-default-props': [2, {
            ignoreCase: false,
        }],
        'react/jsx-sort-props': [2, {
            callbacksLast: false,
            ignoreCase: false,
            noSortAlphabetically: false,
            reservedFirst: false,
            shorthandFirst: false,
            shorthandLast: false,
        }],
        'react/sort-prop-types': [2, {
            callbacksLast: false,
            ignoreCase: false,
            requiredFirst: false,
            sortShapeProp: false,
        }],
        'sort-imports': [2, {
            ignoreCase: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],
        'sort-keys': ['warn', 'asc', {
            caseSensitive: true,
            natural: false,
        }],
        'spaced-comment': [2, 'always'],
    },
};
