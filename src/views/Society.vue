<template>
  <div>
    <Header title="Society Management" />
    <DataTable />
  </div>
</template>

<script>
import DataTable from "@/components/DataTable";
import Header from "@/components/Header";
export default {
  components: {
    DataTable,
    Header
  }
};
</script>

