function myFunc(a, b, ...myArgs) {
  //   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
  //   return arguments;
  //   ubah arguments (OBJECT) jadi ARRAY
  //   return Array.from(arguments);
  //   bisa juga mengubah dengan spread Operator
  return [...arguments];
}

console.log(myFunc(1, 2, 3, 4, 5));
/**
 * *1. sisa argument yg dikirim (selain a dan b) akan ditampung semua didalam myArgs yang bentuknya Array.
 * *2. semua argument juga bisa dikirim tanpa ditangkep parameter, dan akan disimpan di dalam myArgs.
 * *3. REST harus diakhir peletakkan di parameter.
 * @Function sebenarnya kita memiliki Arguments, yang otomatis memiliki semua parameter saat pertama kali function dipanggil
 * *4. arguments bentuknya BUKAN ARRAY melainkan OBJECT,
 * *5. myArgs bentuknya langsung ARRAY
 */
