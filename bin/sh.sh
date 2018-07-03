#! /bin/bash
read -p "enter name:" name
echo you have entered $name

ng g m iwe7-pages/$name --routing --spec=false
ng g c iwe7-pages/$name --spec=false --export=true -m iwe7-pages/$name/$name.module.ts
ng g c iwe7-pages/$name/$name-add --spec=false --export=true -m iwe7-pages/$name/$name.module.ts
ng g s services/$name --spec=false

ng generate entity $name -m iwe7-store/iwe7-store.module.ts --group --spec=false
ng generate effect $name -m iwe7-store/iwe7-store.module.ts --group --spec=false
