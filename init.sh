#!/usr/bin/env bash
cp -fr ./schema/entity/ ./node_modules/@ngrx/schematics/src/entity/files/__name@dasherize@if-flat__
cp -fr ./schema/effect/ ./node_modules/@ngrx/schematics/src/effect/files/__name@dasherize@if-flat__
cp -fr ./schema/styles.js ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/styles.js
