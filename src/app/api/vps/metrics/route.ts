import { NextResponse } from "next/server";

const PROMETHEUS_URL = "https://metrics.ignishub.com.br/";

async function query(query: string) {
  const res = await fetch(
    `${PROMETHEUS_URL}/api/v1/query?query=${encodeURIComponent(query)}`
  );

  const data = await res.json();
  return data.data.result[0]?.value[1];
}

export async function GET() {

  const cpu = await query(
    '100 - (avg(rate(process_cpu_seconds_total[1m])) * 100)'
  );

  const mem = await query(
    '(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes)'
  );

  const disk = await query(
    '100 - (node_filesystem_avail_bytes / node_filesystem_size_bytes * 100)'
  );

  const netIn = await query(
    'rate(node_network_receive_bytes_total[1m])'
  );

  const netOut = await query(
    'rate(node_network_transmit_bytes_total[1m])'
  );

  return NextResponse.json({
    cpu: Number(cpu),
    mem: Number(mem),
    disk: Number(disk),
    netIn: Number(netIn),
    netOut: Number(netOut)
  });
}