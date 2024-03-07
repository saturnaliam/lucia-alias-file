const input = Deno.readTextFileSync("fish.laf");

const lines = input.split('\n');
let final_output = "";

lines.forEach((line: string) => {
  line = line.trim();
  
  let alias_name = "";
  let alias_command = "";

  const split_line = (() => {
    const regex = /(?:\|\||##)/;
    const split_up = line.split(regex);

    split_up.forEach((element: string, index: number) => { split_up[index] = element.trim() });

    return split_up;
  })();

  alias_name = split_line[0];
  alias_command = split_line[1];

  let output = `alias ${alias_name}="${alias_command}"`;
  if (split_line.length === 3) output += ` # ${split_line[2]}`;

  if (alias_name !== "") final_output += output + "\n";
}); 

console.log(final_output);
