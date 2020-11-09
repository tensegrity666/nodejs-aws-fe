// eslint-disable import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';

// @ts-ignore
import { configure } from 'enzyme';

// @ts-ignore
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });