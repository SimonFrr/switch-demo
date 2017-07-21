import { event } from '../gaHelper';

export function submitRegistration (values) {
  event('user registered');
  return {
    type: 'API_VALIDATED_REGISTRATION'
  }
};
