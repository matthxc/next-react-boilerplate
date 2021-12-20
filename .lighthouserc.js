require('dotenv').config();

module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': [
          'error',
          { minScore: 0.96, aggregationMethod: 'median' },
        ],
      },
    },
    collect: {
      url: 'http://localhost:3000',
      numberOfRuns: 5,
    },
  },
};
