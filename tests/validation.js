import test from 'ava';
import validation from '../lib/validation';

// Valid input
test('valid input', t => {
  t.true(validation(), 'Empty input returns true');
});
