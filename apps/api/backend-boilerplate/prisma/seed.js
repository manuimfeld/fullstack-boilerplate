import { seedAdmin } from "../seeds/admin.seed.js";
import { seedUsers } from "../seeds/user.seed.js";

async function run() {
  await seedAdmin();
  await seedUsers();

  console.log("Seeding completo");
}

run();
