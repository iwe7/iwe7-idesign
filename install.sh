#!/usr/bin/env bash
yarn add @ngrx/schematics ngrx-store-freeze --dev
yarn add @ngrx/{store,effects,entity,store-devtools}
ng config cli.defaultCollection @ngrx/schematics
ng generate @ngrx/schematics:store State --root --module app.module.ts
ng generate @ngrx/schematics:effect App --root --module app.module.ts --group
ng generate module Iwe7Store --flat false -m app.module.ts
yarn add @delon/abc @delon/acl @delon/form @delon/theme @delon/util @antv/g2 @antv/g2-plugin-slider @antv/data-set ajv iwe7-util2 ng-zorro-antd qrious
yarn add @ngrx/router-store
cp -fr ./schema/entity/ ./node_modules/@ngrx/schematics/src/entity/files/__name@dasherize@if-flat__
cp -fr ./schema/effect/ ./node_modules/@ngrx/schematics/src/effect/files/__name@dasherize@if-flat__
cp -fr ./schema/styles.js ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/styles.js
