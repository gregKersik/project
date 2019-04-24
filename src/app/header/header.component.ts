import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent{
    @Output() typeChosen = new EventEmitter<string>();

    onSelect(feature: string){
        this.typeChosen.emit(feature);
    }
}