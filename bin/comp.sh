#! /bin/bash
read -p "enter name:" name
echo you have entered $name

mkdir iwe7-library/$name
ng g m iwe7-library/$name/$name --spec=false
ng g c iwe7-library/$name/$name --spec=false --export=true -m iwe7-library/$name/$name/$name.module
ng g m iwe7-library/$name/$name-setting --spec=false
ng g c iwe7-library/$name/$name-setting --spec=false --export=true -m iwe7-library/$name/$name-setting/$name-setting.module
