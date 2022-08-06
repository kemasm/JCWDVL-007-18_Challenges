import { Test } from "../utils/test_utils.js";
import * as module from "../katas/WhereMyAnagramAt.js";

class AnagramsTest extends Test {
  test_sanity() {
    const expectedOutput = [];
    const result = module.anagrams("", []);
    this.assertEqual(expectedOutput, result);
  }

  test_given_case() {
    this.assertEqual(
      module.anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]),
      ["aabb", "bbaa"]
    );
    this.assertEqual(
      module.anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]),
      ["carer", "racer"]
    );
  }
}

// console.log(module.isEqual([2, 1], [2, 1]));

export { AnagramsTest };
