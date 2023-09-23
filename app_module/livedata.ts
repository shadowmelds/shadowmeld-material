export class LiveData {

    constructor(defaultData = null) {
        this.mData = defaultData
    }
    mData: any
    mVersion: number = 0
    mObservers: any[] = []

    observer(observer: any) {
        this.mObservers.push(observer)
        // if (this.mData != null) {
        //     observer.onChanged(this.mData)
        // }
    }

    unSubscribe(observer: any) {
        let idx = this.mObservers.findIndex(item => item === observer)
        idx > -1 && this.mObservers.splice(idx, 1)
    }

    postValue(data: any) {
        this.mData = data
        this.mVersion++
        this.dispatchingValue(null)
    }

    dispatchingValue(observer: any) {

        if (observer != null) {
            observer.onChanged(this.mData)
        } else {
            for (let i = 0; i < this.mObservers.length; ++i) {
                this.mObservers[i].onChanged(this.mData)
            }
        }
    }
}

export class Observer {
    mData = null
    mCallback

    constructor(callback: any) {
        this.mCallback = callback
    }

    onChanged(data: any) {
        this.mData = data
        this.mCallback(data)
    }
}