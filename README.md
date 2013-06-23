# OperaExtOptions

OperaExtOptions is a JavaScript library (written in TypeScript) for automating the options pages of Opera extensions for Opera 15 and newer. It provides you two things: a `SettingStorage` class which simplifies saving and retrieving settings, and a script which binds controls on an extension's options page to values in storage.

## The SettingStorage Class

`/js/lib/storage.js` contains the `SettingStorage` class, which allows you to save generic objects to localStorage by converting them to JSON when saving and converting them back when reading. Unless disabled by creating the object with the `useAccessors` flag set to false, a property will automatically be created for every setting, allowing you reference settings by name instead of using the `get` and `set` functions. 

### SettingStorage(defaults?, options?)
Creates a new SettingStorage object.

- **defaults**: Object -  An object where each key is a setting name and its value is the default value of that setting
- **options**: Object -  An object containing any of the following options:
  - initSetting: string - The name of the setting which stores whether the extension has been initialized. Defaults to `"__initialized__"`
  - prefix: string - Prefixes the name of every setting when saving it to localStorage. This allows multiple `SettingStorage` objects to coexist in one storage object.
  - storage: Storage - Sets the web storage object to use. Defaults to localStorage.
  - useAccessors: boolean - If set to false, prevents accessor properties from being created for each setting.

### init()
Initializes any uninitialized settings to their default values and sets the `firstRun` flag. This should be called once when the extension is loaded.

### isDefined(key)
Returns true if a setting with the given name exists or false otherwise

- **key**: string - The name of the setting

### get(key)
Gets the value of a setting

- **key**: string - The name of the setting

### getAll()
Returns an object containing all settings and their current values as key-value pairs

### reset(key)
Sets a setting to its default value

- **key**: string - The name of the setting

### resetAll()
Sets all settings to their default values

### set(key, value)
Sets the value of a setting

- **key**: string - The name of the setting
- **value**: any - The new value

### setAll(values)
Sets the values of multiple settings

- **values**: Object - An object where each key is a setting name and its value is the new value to save for that setting.

### Properties
- **defaults**: Object - The map of default settings used when creating the object
- **firstRun**: boolean - Is this the first time the extension has been run?
- **initSetting**: string - The name of the setting which stores whether the extension has been initialized
- **prefix**: string - The prefix attached to setting names
- **storage**: Storage - The storage object where settings are saved
- **useAccessors**: boolean - Have accessor properties been added for settings?
- **<setting name>**: any - Gets or sets the value of <setting name>

### Auto-generated Properties
If `useAccessors` is not disabled, a property will be added for every setting given in the `defaults` list. Settings which are not valid property names will be named as follows:
- Any character that is not a-z, A-Z, or underscore will be stripped from the front of the name
- Any sequence of characters that are not a-z, A-Z, 0-9, or underscore will be consolidated into a single word break. Any character following the word break is capitalized.
- if the sanitized name is the same as a function or property of the `SettingStorage` class, it will be prefixed with an underscore.

Examples:
- `setting` → `setting`
- `setting two` → `settingTwo`
- `setting-three` → `settingThree`
- `setting_four` → `setting_four`
- `setting.five!` → `settingFive`
- `40two` → `two`
- `get` → `_get`
- `use accessors` → `_useAccessors`
