import { Iwe7Util2Service } from 'iwe7-util2';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
    providedIn: 'root'
})
export class Iwe7ErrorHandler implements ErrorHandler {

    constructor(
        private injector: Injector,
        private ngZone: NgZone,
        public util: Iwe7Util2Service
    ) { }

    private get toastr(): NzMessageService {
        return this.injector.get(NzMessageService);
    }

    handleError(error: any): void {
        this.ngZone.runOutsideAngular(() => {
            this.util.wpost('Iwe7Error', 'UpsertIwe7Error', {
                Iwe7Error: {
                    page: 'iwe7_worker',
                    msg: error.message,
                    stack: error.stack
                }
            });
            console.log(error);
            this.toastr.error('系统错误，请联系软件开发者处理!系统正在刷新重试!');
        });
    }
}
