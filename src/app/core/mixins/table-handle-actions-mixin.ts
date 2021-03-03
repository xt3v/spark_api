export function tableHandleActionsMixin(BaseClass: any) {
    return class extends BaseClass {
        handleTableActions(action: any, url: string) {
            // console.log(action)
            switch (action.name) {
              case "edit":
                this._router.navigate([url], { queryParams: action.data });
                break;
              default:
                break;
            }
          }
    }
}