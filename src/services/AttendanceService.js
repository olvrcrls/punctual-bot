import apiService from './ApiService';


export function get() {
  apiService.get();
}

export function store() {
  apiService.post();
}

export function update() {
  apiService.patch();
}

export function destroy() {
  apiService.delete();
}
