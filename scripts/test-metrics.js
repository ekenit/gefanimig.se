#!/usr/bin/env node

/**
 * Simple script to test metrics locally
 * Run with: node scripts/test-metrics.js
 */

const BASE_URL = 'http://localhost:3000'

async function testMetrics() {
  console.log('🧪 Testing Metrics System...\n')

  try {
    // Test 1: Check if metrics endpoint is accessible
    console.log('1. Testing metrics endpoint...')
    const metricsResponse = await fetch(`${BASE_URL}/api/metrics`)
    if (metricsResponse.ok) {
      const metrics = await metricsResponse.text()
      console.log('✅ Metrics endpoint accessible')
      console.log('📊 Current metrics:')
      console.log(metrics)
    } else {
      console.log('❌ Metrics endpoint not accessible')
    }

    // Test 2: Test page view tracking
    console.log('\n2. Testing page view tracking...')
    const pageViewResponse = await fetch(`${BASE_URL}/api/metrics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'page_view',
        page: '/test',
        method: 'GET',
        environment: 'development',
      }),
    })

    if (pageViewResponse.ok) {
      console.log('✅ Page view tracking works')
    } else {
      console.log('❌ Page view tracking failed')
    }

    // Test 3: Test site interaction tracking
    console.log('\n3. Testing site interaction tracking...')
    const interactionResponse = await fetch(`${BASE_URL}/api/metrics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'site_interaction',
        action: 'email_modal_open',
        site: 'Ratsit.se',
        environment: 'development',
      }),
    })

    if (interactionResponse.ok) {
      console.log('✅ Site interaction tracking works')
    } else {
      console.log('❌ Site interaction tracking failed')
    }

    // Test 4: Test email template usage tracking
    console.log('\n4. Testing email template usage tracking...')
    const emailResponse = await fetch(`${BASE_URL}/api/metrics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'email_template_usage',
        action: 'copy',
        environment: 'development',
      }),
    })

    if (emailResponse.ok) {
      console.log('✅ Email template usage tracking works')
    } else {
      console.log('❌ Email template usage tracking failed')
    }

    // Test 5: Check updated metrics
    console.log('\n5. Checking updated metrics...')
    const updatedMetricsResponse = await fetch(`${BASE_URL}/api/metrics`)
    if (updatedMetricsResponse.ok) {
      const updatedMetrics = await updatedMetricsResponse.text()
      console.log('✅ Updated metrics:')
      console.log(updatedMetrics)
    }

    console.log('\n🎉 All tests completed!')
    console.log('\n💡 To view metrics in browser:')
    console.log(`   ${BASE_URL}/api/metrics`)
    console.log('\n💡 To test manually:')
    console.log('   curl -X POST http://localhost:3000/api/metrics/track \\')
    console.log('     -H "Content-Type: application/json" \\')
    console.log(
      '     -d \'{"type":"page_view","page":"/","method":"GET","environment":"development"}\''
    )
  } catch (error) {
    console.error('❌ Test failed:', error.message)
    console.log('\n💡 Make sure your development server is running:')
    console.log('   npm run dev')
  }
}

// Run the test
testMetrics()
