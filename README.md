# OperaExtOptions

OperaExtOptions is a JavaScript library (written in TypeScript) for automating the options pages of Opera extensions for Opera 15 and newer. It provides you two things: a `SettingStorage` class which simplifies saving and retrieving settings, and a script which binds controls on an extension's options page to values in storage.

Also included is a default stylesheet and demonstration options page which mimic the style of Opera's internal pages. Since extensions cannot access Opera's resources, I have included a number of background images of varying sizes and styles. If you base your options page from the demonstration page, I suggest you choose a background style or add your own, then remove all of the other background images to reduce the size of your extension.

## Documentation

[SettingStorage Class](https://github.com/ChaosinaCan/OperaExtOptions2/wiki/SettingStorage-Class)

[OptionsPage Class](https://github.com/ChaosinaCan/OperaExtOptions2/wiki/OptionsPage-Class)

[ModalDialog Class](https://github.com/ChaosinaCan/OperaExtOptions2/wiki/ModalDialog-Class)

## Credits
If you use one of the included backgrounds, be sure to credit the source:
- [Blueprint CSS background](http://lea.verou.me/css3patterns/#blueprint-grid) by [Lea Verou](http://lea.verou.me/), modified by me.
- [Carbon CSS background](http://lea.verou.me/css3patterns/#carbon) by [Atle Mo and Sébastien Grosjean](http://www.zencocoon.com/)
- Tiled image backgrounds from [subtlepatterns.com](http://subtlepatterns.com)
