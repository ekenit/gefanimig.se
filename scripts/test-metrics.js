#!/usr/bin/env node

/**
 * Simple script to test metrics locally
 * Run with: node scripts/test-metrics.js
 */

const BASE_URL = 'http://localhost:3001'

// Realistic test data
const testSites = [
  { name: 'Ratsit.se', page: '/' },
  { name: 'Merinfo.se', page: '/' },
  { name: 'Hitta.se', page: '/' },
  { name: 'Eniro.se', page: '/' },
  { name: 'Mrkoll.se', page: '/' },
  { name: 'Upplysning.se', page: '/' },
  { name: 'Birthday.se', page: '/' },
]

const testPages = ['/', '/about', '/security']
const testElements = [
  'email_modal_button',
  'site_visit_button',
  'copy_template_button',
  'email_client_button',
]

async function testMetrics() {
  console.log('🧪 Testing Metrics System with Realistic Data...\n')

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

    // Test 2: Simulate realistic page views across different pages
    console.log('\n2. Testing realistic page view tracking...')
    for (const page of testPages) {
      const pageViewResponse = await fetch(`${BASE_URL}/api/metrics/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'page_view',
          page,
        }),
      })
      if (pageViewResponse.ok) {
        console.log(`✅ Page view tracked for ${page}`)
      }
    }

    // Test 3: Simulate unique visitors on different pages
    console.log('\n3. Testing unique visitor tracking...')
    for (const page of testPages) {
      const visitorResponse = await fetch(`${BASE_URL}/api/metrics/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'unique_visitor',
          page,
        }),
      })
      if (visitorResponse.ok) {
        console.log(`✅ Unique visitor tracked for ${page}`)
      }
    }

    // Test 4: Simulate realistic site interactions
    console.log('\n4. Testing realistic site interaction tracking...')
    for (const site of testSites) {
      const interactionResponse = await fetch(`${BASE_URL}/api/metrics/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'site_interaction',
          action: 'email_modal_open',
          site: site.name,
        }),
      })
      if (interactionResponse.ok) {
        console.log(`✅ Site interaction tracked for ${site.name}`)
      }
    }

    // Test 5: Simulate realistic click patterns
    console.log('\n5. Testing realistic click tracking...')
    for (const element of testElements) {
      for (const page of testPages.slice(0, 2)) {
        // Test on first 2 pages
        const clickResponse = await fetch(`${BASE_URL}/api/metrics/track`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'click',
            element,
            page,
          }),
        })
        if (clickResponse.ok) {
          console.log(`✅ Click tracked for ${element} on ${page}`)
        }
      }
    }

    // Test 6: Simulate email template usage patterns
    console.log('\n6. Testing email template usage tracking...')
    const emailActions = ['copy', 'open_email_client']
    for (const action of emailActions) {
      const emailResponse = await fetch(`${BASE_URL}/api/metrics/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'email_template_usage',
          action,
        }),
      })
      if (emailResponse.ok) {
        console.log(`✅ Email template usage tracked: ${action}`)
      }
    }

    // Test 7: Simulate session duration data
    console.log('\n7. Testing session duration tracking...')
    const sessionDurations = [30, 120, 300, 600, 1800] // 30s, 2m, 5m, 10m, 30m
    for (const duration of sessionDurations) {
      for (const page of testPages) {
        const sessionResponse = await fetch(`${BASE_URL}/api/metrics/track`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'session_duration',
            page,
            duration,
          }),
        })
        if (sessionResponse.ok) {
          console.log(`✅ Session duration tracked: ${duration}s on ${page}`)
        }
      }
    }

    // Test 8: Check final metrics
    console.log('\n8. Checking final metrics...')
    const updatedMetricsResponse = await fetch(`${BASE_URL}/api/metrics`)
    if (updatedMetricsResponse.ok) {
      const updatedMetrics = await updatedMetricsResponse.text()
      console.log('✅ Final metrics:')
      console.log(updatedMetrics)
    }

    console.log('\n🎉 All realistic tests completed!')
    console.log('\n📊 This generated metrics for:')
    console.log(`   - ${testPages.length} different pages`)
    console.log(`   - ${testSites.length} different sites`)
    console.log(`   - ${testElements.length} different UI elements`)
    console.log(`   - ${sessionDurations.length} different session durations`)
    console.log('\n💡 To view metrics in browser:')
    console.log(`   ${BASE_URL}/api/metrics`)
  } catch (error) {
    console.error('❌ Test failed:', error.message)
    console.log('\n💡 Make sure your development server is running:')
    console.log('   npm run dev')
  }
}

// Run the test
testMetrics()
