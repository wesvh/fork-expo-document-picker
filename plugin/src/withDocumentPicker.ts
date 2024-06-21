import { createRunOncePlugin } from 'expo/config-plugins';

import { withDocumentPickerIOS } from './withDocumentPickerIOS';

const pkg = require('fork-expo-document-picker/package.json');

export default createRunOncePlugin(withDocumentPickerIOS, pkg.name, pkg.version);
