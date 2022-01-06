<template>
    <div>
        <p>
            Hello, <strong>{{ personName}}</strong>
        </p>
        <p>
        </p>    
    </div>    
    
</template>

<script>
 export default {
        name: 'PersonGreeter',
        props: {
          personName: String,  
        }
    }
</script>
   
<style>

</style>
